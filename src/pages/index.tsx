import * as React from "react"
import { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Post } from "./post.tsx"
import data from "./data.json"
import { Avatar } from "./avatar.tsx"

const [gist] = useState(data)

// left side add resume
const IndexPage: React.FC<PageProps> = () => {
  console.log(data)

  return (
    <div className="split-screen">
      <div className="left-side">
      <div className="my-name"><p>Tim McHale</p></div>
      <Avatar avatar = {data["avatar"]}/>
      <div className="about-me">
        <br></br>
        <br></br>
        <br></br>
        <p>Currently living that indie dev lifestyle.</p>
        <br></br>
        <p>Previously a DevOps Engineer at MarketDial.</p>
        <br></br>
        <p>Five years experience as a python dev working for startups and freelance.</p> 
        <br></br>
        <br></br>
        <br></br>
        <p>Check out what I'm doing on <a href="https://twitter.com/mctim123">twitter</a></p>
        
        </div>
      </div>
      
      <div className="right-side">
        <div className="my-name"><p>What I'm doing</p></div>
        <br/>
        <br />
        <Post description = {data["Fallout.md"][0]["description"]} content = {data["Fallout.md"][0]["content"]} link = {data["Fallout.md"][0]["link"]}/>
        <br/>
        <Post description = {data["fallback.md"][0]["description"]} content = {data["fallback.md"][0]["content"]} link = {data["fallback.md"][0]["link"]} />
        </div>
      </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Tim's web app</title>
