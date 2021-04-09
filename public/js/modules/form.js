class Form {
    constructor () {
        this.name = "",
        this.email = "",
        this.message = ""
    }

    editField(evt) {
        this[evt.target.name] = evt.target.value
    }

    submitForm() {
        for (let key in this) {
            if (this[key] === "" || this[key] === " " ) return { error: `${key} can not be empty!` }
        }
        const form = {
            name: this.name,
            email: this.email,
            message: this.message
        }
        this.cleanUp()
        return form
    }

    cleanUp() {
        this.name = "",
        this.email = "",
        this.message = ""
    }
}

export default Form