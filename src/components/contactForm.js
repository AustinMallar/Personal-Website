import React, { useState } from "react"

import TextareaAutosize from "react-textarea-autosize"
import FormStyles from "./styles/FormStyles"

const ContactForm = () => {
  const [form, setValues] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleUpdate = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { name, email, message } = form

    console.log(name, email, message)
    setValues({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <FormStyles>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-field">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleUpdate}
            ></input>
          </div>
          <div className="form-field">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleUpdate}
            ></input>
          </div>
        </div>
        <TextareaAutosize
          name="message"
          required
          value={form.message}
          onChange={handleUpdate}
          minRows={7}
          maxRows={10}
          placeholder="ddadwawddwa"
        />
        <button>Send</button>
      </form>
    </FormStyles>
  )
}

export default ContactForm
