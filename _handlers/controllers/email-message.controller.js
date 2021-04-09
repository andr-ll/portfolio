import EmailService from '../services/email.service.js'

const emailService = new EmailService()

export default class EmailMessageController {
    sendForm (req, res, next) {
        const { name, email, message } = req.body
        try {
            emailService.send({
                to: 'andreylytovchenko@yandex.ru',
                subject: `New message from ${email}`,
                message: `Email: ${email}; \nMessage: \n${message}`,
            })
            emailService.send({
                to: email,
                subject: 'Email was delivered',
                message: `Hello ${name}!\n\nThank you!\n\nYour email was successfully delivered.`,
            })
            res.json({ message: `Thank you, ${name}, your email was successfully sent!` })
        } catch (error) {
            next(error)
        }
    }
}