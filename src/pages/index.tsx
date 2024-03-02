import * as React from "react"
import { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import PDF from "../images/resume1.pdf"
import InfiniteScroll from 'react-infinite-scroll-component';
import Gists from "../json/gists.json"
import { Avatar } from "../components/avatar";
import AvatarData from "../json/avatar.json"
import InfiniteScrollList from "../components/InfiniteScrollComponent.tsx";
import * as helpers from '../utils/helpers.ts';

// ****** New Branch add-repo-commit-history

// You have the json to complete the challenge below, you should be able to report the activity of a repo with the below code
// This link with the hash from GatsbyActivity.json will return "html_url", which will show the code of each commit "git_commits_url": "https://api.github.com/repos/trmchale1/tim-s-gatsby-app/git/commits{/sha}",

// we need a data model where gists and repo activity are combined
// gists contain a created at, description, and content
// before after commits, ref includes branch, timestamp, activity type
// each object could include a timestamp, 
// if gist - description is subject, content is unique
// if activity - after, branch from ref, and activity type
// objects sorted by timestamp
// if statements in the html to add different stylings for gists and repo activity

// timestamp is our new key
const IndexPage: React.FC<PageProps> = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    helpers.getDataFromGists(setItems);
  }, []);

  return (
    <div className="split-screen">
      <div className="left-side">
      <Avatar avatar={AvatarData} />
      <div className="my-name"><p>Tim McHale</p></div>
      <div className="about-me">
        <br></br>
        <br></br>
        <p>Currently living that indie dev lifestyle.</p>
        <br></br>
        <p>Code should be concise, while changes in state should have simple, clear workflows.</p>
        <br></br>
        <p>Check out what I'm doing on <a href="https://twitter.com/mctim123">twitter</a></p>        
        <br></br>
        <p> <a href={PDF} target="blank">Copy of my resume</a></p>
        </div>
      </div>
      
      <div className="right-side">
        <div className="my-name"><p>What I'm doing</p></div>
        <br />
        <div className="my-text">
          <InfiniteScrollList items={items} getDataFromGists={helpers.getDataFromGists} />
        </div>
        
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Tim's web app</title>
