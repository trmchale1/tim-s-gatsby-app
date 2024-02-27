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
// can we imporve the button pointing to github, wrap it in a margin
// can we wrap each gist in a bubble or a margin
// change the content of the gist to something laid out in a codeblock, dark with correct syntax formatting



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
