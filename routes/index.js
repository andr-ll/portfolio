import express from "express"
import { projects } from '../modules/require.js'
export const mainRoute = express.Router()

// GET /
mainRoute.get('/', (req, res) => {
    res.render('homepage', {
        title: "Home | Andr-ll",
        style: `<link rel="stylesheet" href="/css/homepage.min.css">`,
        script: `<script src="/js/index.js" defer></script>`
    })
})

// GET /about
mainRoute.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        style: `<link rel="stylesheet" href="/css/about.min.css">`,
        script: `<script src="/js/about.js" defer></script>`
    })
})

// GET /projects
mainRoute.get('/projects', (req, res) => {
    res.render('projects', {
        title: "Projects",
        // style: `<link rel="stylesheet" href="/css/projects.min.css">`,
        projects
    })
})


mainRoute.get('/project/:id', (req, res) => {
    const id = req.params.id
    const project = projects.find(item => item.id === id)
    if (!project) res.redirect('404-not-found')
    res.render('project', {
        title: "Project",
        style: `<link rel="stylesheet" href="/css/project.min.css">`,
        project
    })
})

