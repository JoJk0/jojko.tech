declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODEMAILER_HOSTNAME: string
            NODEMAILER_USERNAME: string
            NODEMAILER_PASSWORD: string
            GRECAPTCHA_SECRET: string
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { };
