import styled from "styled-components"

const LayoutStyles = styled.div`
  div.container {
    max-width: 900px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: #086ce4;
    transition: color 0.6s;
  }

  a:hover {
    color: #b51f24;
  }

  main {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 0;
    min-height: 500px;
  }

  p {
    margin-top: 1rem;
  }

  p.bio-text {
    font-size: 1.2rem;
    text-align: center;
  }

  ul.list {
    padding-top: 0.5rem;
    padding-left: 2rem;
  }

  @media (max-width: 1000px) {
    main {
      margin: 0 2rem;
    }
  }
`

export default LayoutStyles
