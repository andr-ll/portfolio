import sendEmail from '../../emailer/email.js';

export default class EmailMessageController {

    sendEmail = sendEmail;

    async sendForm(req, res, _next) {
        const { name, email, message } = req.body
        await sendEmail(name, email, message);
        res.json({ message: `Thank you, ${name}, your email was successfully sent!` })
    }
}