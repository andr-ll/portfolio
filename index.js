import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import exphbs from "express-handlebars";
import { mainRoute } from './routes/index.js';
import * as path from 'path';
import { version } from './modules/require.js'

dotenv.config({ path: './config/.env' });

const app = express();
const PORT = process.env.PORT;

// MORGAN
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
};

// HBS
app.engine('.hbs', exphbs({ defaultLayout: "main", extname: '.hbs' }));
app.set('view engine', '.hbs');

//Static
app.use(express.static(path.join(path.resolve(), 'public')));

// Routes
app.use('/', mainRoute);

// Bad Request
app.get('*', (req, res) => {
    res.render('404', {
        layout: "404",
        title: "404 page not found",
        style: `<link rel="stylesheet" href="/css/404.min.css">`,
        script: `<script src="/js/404.js"></script>`
    });
});


app.listen(PORT, () => {
    console.log(`✅ Server version ${version} is running in ${process.env.NODE_ENV.toUpperCase()} mode on port ${PORT}...`);
});