import styled from "styled-components"

const BlogPostTemplateStyles = styled.div`
  p.post-date {
    font-size: 0.9rem;
  }

  div.featured-image {
    margin-top: 1.5rem;
  }

  div.post-body {
    margin-top: 2rem;
  }
  ul.post-nav {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
  }

  li.next-post,
  li.prev-post {
  }
`

export default BlogPostTemplateStyles
