/* eslint-disable max-len */
import * as functions from "firebase-functions";
import {launch} from "puppeteer";
import {initializeApp, cert, ServiceAccount} from "firebase-admin/app";
import {getStorage} from "firebase-admin/storage";
import {createTransport} from "nodemailer";

import serviceAccount from "./key.local.json";
import {
  defineValidationSchema,
  emailCopyHTML,
  emailHTML,
  GRecaptchaResponse,
  sanitize,
  SendMailCallData,
  validate,
} from "./utils";
import validator from "validator";
import {cvStoragePath, cvWebUrl, region} from "./config";
import axios from "axios";

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
  memory: "1GB",
}).database.ref("/cv")
    .onWrite(async (snapshot) => {
      // puppeteer
      const browser = await launch({waitForInitialPage: false});
      try {
        const page = await browser.newPage();
        await page.goto(cvWebUrl, {
          waitUntil: "networkidle2",
        });
        const pdf = await page.pdf({
          format: "a4",
          printBackground: true,
          pageRanges: "1",
        });

        const app = initializeApp({
          credential: cert(serviceAccount as ServiceAccount),
          storageBucket: "jjk-portfolio.appspot.com",
        });

        const storage = getStorage(app);

        const file = storage.bucket().file(cvStoragePath);

        await file.save(pdf, {public: true})
            .catch((e) => functions.logger.error(e));

        functions.logger.log("Save PDF Triggered!");
      } catch (e) {
        functions.logger.error(e);
      }

      await browser.close();

      return snapshot;
    });


export const sendMail = functions.region(region).https
    .onCall(async (data: SendMailCallData) => {
      const schema = defineValidationSchema<SendMailCallData>({
        topic: (val) => [
          validator.isAlphanumeric(val),
          !validator.isEmpty(val),
          validator.isLength(val, {min: 3, max: 100}),
        ],
        name: (val) => [
          validator.isAlphanumeric(val),
          !validator.isEmpty(val),
          validator.isLength(val, {min: 3, max: 100}),
        ],
        email: (val) => [
          validator.isEmail(val),
          !validator.isEmpty(val),
          validator.isLength(val, {min: 3, max: 100}),
        ],
        message: (val) => [
          validator.isAlphanumeric(val),
          !validator.isEmpty(val),
          validator.isLength(val, {min: 120, max: 8192}),
        ],
      });

      validate(data, schema);

      const {
        topic,
        name,
        message,
        receipt,
        email,
        gRecaptchaToken,
      } = sanitize(data);

      // RECAPTCHA VERIFICATION

      const {data: response} = await axios.get<GRecaptchaResponse>(
          `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GRECAPTCHA_SECRET}&response=${gRecaptchaToken}`
          , {responseType: "json"});

      const {score} = response;

      console.log(score);

      if (score < 0.5) {
        functions.logger.error("Unsuccessful verification");
        return;
      }

      const transporter = createTransport({
        host: "smtppro.zoho.eu",
        port: 465,
        secure: true,
        auth: {
          user: process.env.NODEMAILER_USERNAME,
          pass: process.env.NODEMAILER_PASSWORD,
        },
      });

      transporter.verify(function(err, success) {
        if (err) {
          console.error(`SMTP Error: ${err}`);
        }
        if (success) {
          console.log("SMTP ready...");
        } else {
          console.error("SMTP not ready!");
        }
      });

      const date = new Date().toISOString();

      const {messageId} = await transporter.sendMail({
        from: `${name} <jacob@jojko.tech>`,
        to: "jacob@jojko.tech",
        subject: `${name} sent you a message about ${topic}`,
        html: emailHTML({name, email, topic, message, date}),
      });

      console.log("Message sent: %s", messageId);

      if (!receipt) return;

      const {messageId: copyMessageId} = await transporter.sendMail({
        from: "jojko.tech <jacob@jojko.tech>",
        to: email,
        subject: `Thanks ${name} for contacting me about ${topic}`,
        html: emailCopyHTML({name, topic, message, date}),
      });

      console.log("Copy of message sent: %s", copyMessageId);
    });
