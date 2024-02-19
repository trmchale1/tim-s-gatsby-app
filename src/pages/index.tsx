import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}


// Improve the left side with background and bio
// Improve the right side by connecting a live updating application with new blog posts and media
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
    
    
    <div className="split-screen">
      <div className="left-side">
      <h1 style={headingStyles}>
        Good Morning Tim!
      </h1>
      </div>
      
      <div className="right-side">
        <p>What is going on over here?</p>
      </div>
    </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Tim's web app</title>
