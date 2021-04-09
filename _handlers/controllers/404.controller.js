export default class NotFoundController {
    badRequest = (req, res, next) => {
        res.render('404', {
            layout: "404",
            title: "404 page not found",
            style: `<link rel="stylesheet" href="/css/404.min.css">`,
            script: `<script src="/js/404.js"></script>`
        });
    }
}