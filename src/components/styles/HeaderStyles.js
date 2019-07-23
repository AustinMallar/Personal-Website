import styled from "styled-components"

const HeaderStyles = styled.header`
  display: grid;
  align-items: center;
  height: 200px;
  background: linear-gradient(#0069e8, #4e89c7);
  position: relative;

  h1.site-title {
    margin-bottom: 1.6rem;
  }

  a.site-link {
    color: white;
    font-size: 2.5rem;
    text-decoration: none;
    transition: all 0.5s;
  }

  a.site-link:hover {
    color: #cccccc;
  }

  div.header-logo-wrap {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 25%);
  }
`

export default HeaderStyles
