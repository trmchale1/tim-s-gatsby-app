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

// ****** New Branch map-inner-object-and-render

// how should we implemet data in GatsbyActivity.json, commits are a little verbose, perhaps pull requests? => implement new data for repo
// right side add scolling feature
// small github icon for github gist link

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
