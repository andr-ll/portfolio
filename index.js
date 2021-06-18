import express from 'express';
import * as path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import exphbs from "express-handlebars";
import { mainRoute } from './_handlers/routes/index.route.js';
import { notFound } from './_handlers/routes/404.route.js'
import { version } from './modules/require.js'
import { emailMessage } from './_handlers/routes/email-message.route.js';
import { errorMiddleware } from './_handlers/middleware/error.middleware.js';
import secure from 'ssl-express-www';

dotenv.config();

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

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//SSL
app.use(secure);

// Routes
app.use('/', emailMessage);
app.use('/', mainRoute);
app.use('/', notFound); // must be last one!
app.use(errorMiddleware);



app.listen(PORT, () => {
    if (process.env.NODE_ENV === "development") {
        console.log(`✅ Server version ${version} is running in ${process.env.NODE_ENV.toUpperCase()} mode on http://localhost:${PORT}...`);
    } else {
        console.log(`✅ Server version ${version} is running on port ${PORT}...`);
    }
});