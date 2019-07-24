import styled from "styled-components"

const FooterStyles = styled.footer`
  display: grid;
  align-items: center;

  div.social-links {
    display: flex;
    font-size: 2rem;
    align-items: center;
  }

  a.social-icon {
    margin-right: 1rem;
    color: #4e89c7;
    transition: color 0.5s;
  }

  a.social-icon:hover {
    color: #b51f24;
  }

  div.footer-text {
    margin-top: 1rem;
  }
`

export default FooterStyles
