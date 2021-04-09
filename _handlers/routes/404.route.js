import { Router } from "express";
import NotFoundController from "../controllers/404.controller.js";
export const notFound = Router()

const notFoundController = new NotFoundController()

notFound.get('*', notFoundController.badRequest)