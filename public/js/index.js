import createElem from "./modules/createElem.js";
import Form from "./modules/form.js";
import request from "./modules/request.js";
import WriteBanner from "./modules/write_banner.js";

const writeBanner = new WriteBanner()
writeBanner.write()

const form = new Form()
const formHTML = document.querySelector('form')
const error = createElem('p', 'error')
const success = createElem('p', 'success')
const loading = createElem('div', 'loading', 'Loading...')

formHTML.addEventListener('change', (evt) => form.editField(evt))
formHTML.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const submit = form.submitForm();
    if (submit.error) {
        error.textContent = submit.error
        formHTML.appendChild(error)
        return
    }

    formHTML.appendChild(loading)
    const data = await request('/api/email-message', {...submit}, "POST")
    success.textContent = data.message
    setTimeout(() => {
        formHTML.removeChild(loading)
        formHTML.appendChild(success)
    }, 2000);
    if (formHTML.children.error) formHTML.removeChild(error)
    formHTML.reset()
    return
})



