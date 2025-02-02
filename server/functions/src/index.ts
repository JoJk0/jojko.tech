import * as functions from 'firebase-functions'
import { launch } from 'puppeteer'
import type { ServiceAccount } from 'firebase-admin/app'
import { cert, initializeApp } from 'firebase-admin/app'
import { getStorage } from 'firebase-admin/storage'
import { createTransport } from 'nodemailer'

import validator from 'validator'
import axios from 'axios'
import serviceAccount from './key.local.json'
import type {
  GRecaptchaResponse,
  SendMailCallData,
} from './utils'
import {
  defineValidationSchema,
  emailCopyHTML,
  emailHTML,
  sanitize,
  validate,
} from './utils'
import { cvBwStoragePath, cvStoragePath, cvWebUrl, region } from './config'

// JJK Functions
// https://jojko.tech
// 2022 jojko.tech
//
// DISCLAIMER
// The code of these server functions being public does not mean that you have to abuse them, be respectful.
// The code is public for showcase reasons
// Should you find a security vulnerability, please contact me immediately:
// https://jojko.tech/#contact
//

export const savePdf = functions.region(region).runWith({
  memory: '1GB',
}).database.ref('/cv')
  .onWrite(async (snapshot) => {
    // puppeteer
    const browser = await launch({ waitForInitialPage: false })

    const app = initializeApp({
      credential: cert(serviceAccount as ServiceAccount),
      storageBucket: 'jjk-portfolio.appspot.com',
    })

    const storage = getStorage(app)

    const saveFile = async (bw?: true) => {
      const page = await browser.newPage()

      const url = bw ? `${cvWebUrl}?blackAndWhite` : cvWebUrl

      await page.goto(url, {
        waitUntil: 'networkidle2',
      })

      const pdfOptions = {
        format: 'a4',
        printBackground: true,
        pageRanges: '1',
      } as const

      const pdf = await page.pdf(pdfOptions)

      const path = bw ? cvBwStoragePath : cvStoragePath

      const file = storage.bucket().file(path)

      await file.save(pdf, { public: true })
        .catch(e => functions.logger.error(e))
    }

    try {
      await Promise.all([
        saveFile(),
        saveFile(true),
      ])
    }
    catch (e) {
      functions.logger.error(e)
    }

    await browser.close()

    return snapshot
  })

export const sendMail = functions.region(region).https
  .onCall(async (data: SendMailCallData) => {
    const schema = defineValidationSchema<SendMailCallData>({
      topic: val => [
        validator.isAlphanumeric(val),
        !validator.isEmpty(val),
        validator.isLength(val, { min: 3, max: 100 }),
      ],
      name: val => [
        validator.isAlphanumeric(val),
        !validator.isEmpty(val),
        validator.isLength(val, { min: 3, max: 100 }),
      ],
      email: val => [
        validator.isEmail(val),
        !validator.isEmpty(val),
        validator.isLength(val, { min: 3, max: 100 }),
      ],
      message: val => [
        validator.isAlphanumeric(val),
        !validator.isEmpty(val),
        validator.isLength(val, { min: 120, max: 8192 }),
      ],
    })

    validate(data, schema)

    const {
      topic,
      name,
      message,
      receipt,
      email,
      gRecaptchaToken,
    } = sanitize(data)

    // RECAPTCHA VERIFICATION

    const { data: response } = await axios.get<GRecaptchaResponse>(
          `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GRECAPTCHA_SECRET}&response=${gRecaptchaToken}`
          , { responseType: 'json' })

    const { score } = response

    // console.info(score)

    if (score < 0.5) {
      functions.logger.error('Unsuccessful verification')
      return
    }

    const transporter = createTransport({
      host: 'smtppro.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    })

    transporter.verify()

    const date = new Date().toISOString()

    const topicNames: Record<SendMailCallData['topic'], string> = {
      HIRING_ME: 'hiring me',
      BUGS: 'bugs',
      COFFEE: 'coffee',
      COOPERATION: 'cooperation',
      FREELANCE_PROJECTS: 'freelance projects',
      SOCIAL_MEDIA: 'social medias',
    }

    const { messageId } = await transporter.sendMail({
      from: `${name} <jacob@jojko.tech>`,
      to: 'jacob@jojko.tech',
      subject: `${name} sent you a message about ${topicNames[topic]}`,
      html: emailHTML({ name, email, topic, message, date }),
    })

    // console.info('Message sent: %s', messageId)

    if (!receipt)
      return

    const { messageId: copyMessageId } = await transporter.sendMail({
      from: 'jojko.tech <jacob@jojko.tech>',
      to: email,
      subject: `Thanks ${name} for contacting me about ${topicNames[topic]}`,
      html: emailCopyHTML({ name, topic, message, date }),
    })

    // console.info('Copy of message sent: %s', copyMessageId)
  })
