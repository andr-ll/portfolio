import { projects } from '../../modules/require.js'

export default class IndexController {

    mainPage = (req, res, next) => {
        res.render('homepage', {
            title: "Home | Andr-ll",
            style: `<link rel="stylesheet" href="/css/homepage.min.css">`,
            script: `<script src="/js/index.js" type="module" defer></script>`
        })
    }

    aboutPage = (req, res, next) => {
        res.render('about', {
            title: "About",
            style: `<link rel="stylesheet" href="/css/about.min.css">`,
            script: `<script src="/js/about.js" defer></script>`
        })
    }

    projectsPage = (req, res, next) => {
        res.render('projects', {
            title: "Projects",
            // style: `<link rel="stylesheet" href="/css/projects.min.css">`,
            projects
        })
    }

    oneProject = (req, res, next) => {
        const id = req.params.id
        const project = projects.find(item => item.id === id)
        if (!project) res.redirect('404-not-found')
        res.render('project', {
            title: "Project",
            style: `<link rel="stylesheet" href="/css/project.min.css">`,
            project
        })
    }
}