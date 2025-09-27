import nodemailer from 'nodemailer'

export interface MailInterface {
    from: string // Made 'from' required to ensure it's always a string
    to: string | string[]
    cc?: string | string[]
    bcc?: string | string[]
    subject: string
    text?: string
    html: string
}

export default class MailService {
    private static instance: MailService
    private transporter: nodemailer.Transporter | undefined

    private constructor() {}

    static getInstance() {
        if (!MailService.instance) {
            MailService.instance = new MailService()
        }
        return MailService.instance
    }

    async initTransporter() {
        try {
            if (process.env.NODE_ENV === 'test') {
                await this.createLocalConnection()
            } else {
                await this.createConnection()
            }
            await this.verifyConnection() // Ensure connection is verified before proceeding
        } catch (error) {
            console.error(`Error initializing mail transporter: ${error}`)
            throw error // Rethrow to handle in caller
        }
    }

    async createLocalConnection() {
        // For testing purposes, you can use nodemailer's test account
        // const account = await nodemailer.createTestAccount()

        // Currently using the private SMTP server
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465', 10),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
            logger: process.env.NODE_ENV === 'development',
            debug: process.env.NODE_ENV === 'development',
        })
    }

    async createConnection() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465', 10),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        })
    }

    async sendMail(requestId: string | number | string[], options: MailInterface) {
        if (!this.transporter) {
            throw new Error('Transporter not initialized.')
        }

        return this.transporter
            .sendMail({
                from: `"EcomVestors" <${options.from}>`, // Ensures 'from' is a valid string
                to: options.to,
                cc: options.cc,
                bcc: options.bcc,
                subject: options.subject,
                text: options.text,
                html: options.html,
            })
            .then((info) => {
                console.info(`${requestId} - Mail sent successfully!!`)
                console.info(`${requestId} - [MailResponse]=${info.response} [MessageID]=${info.messageId}`)
                if (process.env.NODE_ENV === 'development') {
                    console.info(`${requestId} - Nodemailer ethereal URL: ${nodemailer.getTestMessageUrl(info)}`)
                }
                return info
            })
            .catch((error) => {
                console.error(`${requestId} - Error sending mail: ${error}`)
                throw error // Propagate error to be handled by caller
            })
    }

    async verifyConnection() {
        if (!this.transporter) {
            throw new Error('Transporter not initialized.')
        }
        return this.transporter.verify()
    }
}
