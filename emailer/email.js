import fetch, { Headers } from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config()

const myHeaders = new Headers();
myHeaders.append("x-trustifi-key", `${process.env.TRUSTIFI_KEY}`);
myHeaders.append("x-trustifi-secret", `${process.env.TRUSTIFI_SECRET}`);
myHeaders.append("Content-Type", "application/json");

const raw = (name, email, message) => {

    return JSON.stringify({
        "recipients": [
            {
                "email": 'andreylytovchenko@yandex.ru',
                "name": `${name}`
            }
        ],
        "title": "New message from portfolio.",
        "html": `<b>Message from: ${name} (${email}):</b><br/><br/>${message}`,
    })
};

const requestOptions = (name, email, message) => {
    return {
        method: 'POST',
        headers: myHeaders,
        body: raw(name, email, message),
        redirect: 'follow'
    }
};

export default (name, email, message) => fetch("https://be.trustifi.com/api/i/v1/email", requestOptions(name, email, message))
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));