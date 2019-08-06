import styled from "styled-components"

const FormStyles = styled.div`
  form.contact-form {
    display: flex;
    flex-direction: column;
  }

  .form-row {
    display: flex;
  }

  .form-field {
    width: 50%;
  }

  .form-field > input {
    width: 100%;
  }

  input[type="textarea"] {
  }
`

export default FormStyles
