/* eslint-disable max-len */
import validator from "validator";

export type GRecaptchaResponse = {
    success: boolean
    score: number
    action: string
    challenge_ts: string
    hostname: string
    "error-codes"?: string[]
}

export type SendMailCallData = {
    topic: string
    name: string
    email: string
    message: string
    receipt: string
    gRecaptchaToken: string
}

export type SchemaDefinition<T extends Record<string, string>> = {
    [key in keyof T]?: (value: T[key]) => boolean[]
}

export const validate = <T extends Record<string, string>>(data: T, schema: SchemaDefinition<T>) =>
  Object.entries<(value: string) => boolean[]>(schema as any).map(([key, validate]) => [key, validate(data[key]).reduce((acc, val) => acc && val, true)] as const).reduce((acc, [_, val]) => acc && val, true);

export const defineValidationSchema = <T extends Record<string, string>>(schema: SchemaDefinition<T>) => schema;

export const sanitize = <T extends Record<string, string>>(data: T) => {
  return Object.entries(data)
      .map(([key, value]) => [key, validator.escape(value)] as const)
      .reduce((acc, [key, value]) => ({...acc, [key]: value}), {} as T);
};

export const emailHTML = ({name, email, topic, message, date}: Pick<SendMailCallData, "name"|"email"|"topic"|"message"> & { date: string }) => `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${name} sent you a message via jojko.tech about ${topic}</title>
        </head>
        <body style="background: #001427; color: #c5fffe; font-family: Quicksand, sans-serif;">
          <img src="https://firebasestorage.googleapis.com/v0/b/jjk-portfolio.appspot.com/o/documents%2Flogo-email2.png?alt=media" alt="jojko" style="height: 150px; margin: 2em; margin-bottom: 1em;">
          <div style="margin: 2em; margin-top: 0;">
            <p>${name} &lt;${email}&gt; wrote:</p>
            <div style="background: #c5fffe; color: #001427; padding: 1em 2em; border-radius: 2em; margin-top: 1em; font-size: 1.2em;">${message}</div>
            <div style="text-align: center; margin: 0.7em; margin-top: 2em;"><a href="https://jojko.tech/" style="text-decoration: none; color: rgba(197,255,254,0.5);">jojko.tech</a></div>
            <div style="color: rgba(197,255,254,0.3); text-align: center;">Generated on ${date}</div>
          </div>
        </body>
      </html>`;

export const emailCopyHTML = ({name, topic, message, date}: Pick<SendMailCallData, "name" | "topic" | "message"> & {date: string}) => `
              <!DOCTYPE html>
              <html>
              <head>
              <title>Thanks ${name} for contacting me about ${topic}</title>
              </head>
              <body style="background: #001427; color: #c5fffe; font-family: sans-serif;">
              <img src="https://firebasestorage.googleapis.com/v0/b/jjk-portfolio.appspot.com/o/documents%2Flogo-email2.png?alt=media" alt="jojko" style="height: 150px; margin: 2em; margin-bottom: 1em;">
              <div style="margin: 2em; margin-top: 0;">
                <h1>Thanks ${name}</h1>
                <p>Your email has been received. I will contact you shortly.</p>
                <p>Here is a copy of your message:</p>
                <div style="background: #c5fffe; color: #001427; padding: 1em 2em; border-radius: 2em; margin-top: 2em; font-size: 1.2em;">${message}</div>
                <div style="text-align: center; margin: 0.7em; margin-top: 2em;"><a href="https://jojko.tech/" style="text-decoration: none; color: rgba(197,255,254,0.5);">jojko.tech</a></div>
                <div style="color: rgba(197,255,254,0.3); text-align: center;">Generated on ${date}</div>
              </div>
              </body>
              </html>
              `;
