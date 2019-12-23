import styled from "styled-components"

const HeaderStyles = styled.header`
  height: 200px;
  background: radial-gradient(circle at bottom, #4e89c7, #0069e8);
  position: relative;

  div.nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(51, 46, 52, 0.35);
    height: 5rem;
    width: 100%;
  }

  div.logo {
    margin-left: 1rem;
  }

  div.nav-links ul li {
    display: inline;
    margin-right: 2rem;
  }

  a.nav-link {
    color: #dddddd;
    transition: color 0.6s;
  }

  a.active {
    color: #fff;
  }

  a.nav-link:hover {
    color: #dddddd;
  }

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
