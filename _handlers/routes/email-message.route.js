import { Router } from "express";
import EmailMessageController from "../controllers/email-message.controller.js";

export const emailMessage = Router()
const emailMessageController = new EmailMessageController()

emailMessage.post('/api/email-message', emailMessageController.sendForm)