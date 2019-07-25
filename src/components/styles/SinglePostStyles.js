import styled from "styled-components"

const SinglePostStyles = styled.div`
  background: rgba(90, 98, 106, 0.31);
  padding: 2rem;
  border-radius: 0.5rem;
  transition: all 0.3s;

  a {
    color: #000;
  }

  small {
    color: #111;
  }

  p {
    color: #111;
  }

  :hover {
    background: rgba(90, 98, 106, 0.2);
    transform: scale(1.05);
  }
`

export default SinglePostStyles
