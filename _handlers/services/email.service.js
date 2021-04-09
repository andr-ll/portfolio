import * as nodemailer from 'nodemailer';
import { errorMiddleware } from '../middleware/error.middleware.js'

export default class EmailService {

    constructor() {
        this._transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: "smtp.google.com",
            auth: {
                user: "dre.mailerll@gmail.com", // generated ethereal user
                pass: "123456Qwerty!@#$%^", // generated ethereal password
            },
        });
    }

    send = (data, next) => {
        let error = false;
        let check;
        this._transporter.sendMail({
            from: "dre.mailerll@gmail.com",
            to: data.to,
            subject: data.subject,
            text: data.message,
        }, check = (err) => {
            if (err) {
                next(err)
                return true
            } 
            return false
        })
        error = check()
        return error
    }
}
