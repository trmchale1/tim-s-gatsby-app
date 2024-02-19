import * as React from "react"
import { useEffect, useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Post } from "./post.tsx"


//useEffect(fetchData, []);

// Improve the left side with background and bio
// Improve the right side by connecting a live updating application with new blog posts and media
const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="split-screen">
      <div className="left-side">
      <h1>Good Morning Tim</h1>
      </div>
      
      <div className="right-side">
        <p>What is going on over here?</p>
        <Post post={1} />
        <Post post={2} />
        <Post post={10} />
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Tim's web app</title>
