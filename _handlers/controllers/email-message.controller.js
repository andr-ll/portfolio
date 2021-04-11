import EmailService from '../services/email.service.js'

const emailService = new EmailService()

export default class EmailMessageController {
    sendForm(req, res, next) {
        const { name, email, message } = req.body
        try {
            const error = emailService.send({
                to: 'andreylytovchenko@yandex.ru',
                subject: `New message from ${email}`,
                message: `New message from: \n\n${email} \n\nMessage: \n\n"${message}"`,
            }, next)

            if (!error) res.json({ message: `Thank you, ${name}, your email was successfully sent!` })
        
        } catch (error) {
            next(error)
        }
    }
}