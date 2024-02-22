import * as React from "react"
import { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Post } from "./post.tsx"
import data from "./data.json"
import { Avatar } from "./avatar.tsx"

const [gist] = useState(data)

// Improve the left side with background and bio
// Improve the right side by connecting a live updating application with new blog posts and media
const IndexPage: React.FC<PageProps> = () => {
  console.log(data)

  return (
    <div className="split-screen">
      <div className="left-side">
      <h1>Tim McHale</h1>
        <Avatar avatar = {data["avatar"]}/>
      </div>
      
      <div className="right-side">
        <p>What is going on over here?</p>
        <Post description = {data["Fallout.md"][0]["description"]} content = {data["Fallout.md"][0]["content"]} link = {data["Fallout.md"][0]["link"]}/>
        <br />
        <Post description = {data["fallback.md"][0]["description"]} content = {data["fallback.md"][0]["content"]} link = {data["fallback.md"][0]["link"]} />
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Tim's web app</title>
