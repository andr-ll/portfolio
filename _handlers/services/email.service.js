import * as nodemailer from 'nodemailer';

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

    send = (data) => {
        this._transporter.sendMail({
            from: "dre.mailerll@gmail.com",
            to: data.to,
            subject: data.subject,
            text: data.message,
        }, (err) => {
            if (err) throw new Error(err.message)
        });
    }
}
