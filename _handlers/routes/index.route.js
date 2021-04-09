import express from "express"
import IndexController from '../controllers/index.controller.js'
export const mainRoute = express.Router()

const indexController = new IndexController()

mainRoute.get('/', indexController.mainPage)
mainRoute.get('/about', indexController.aboutPage)
mainRoute.get('/projects', indexController.projectsPage)
mainRoute.get('/project/:id', indexController.oneProject)

