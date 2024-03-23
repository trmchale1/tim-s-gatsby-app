import * as React from "react";
import { useState, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import PDF from "../images/McHale, Tim CV.pdf";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar } from "../components/avatar";
import AvatarData from "../json/avatar.json";
import InfiniteScrollList from "../components/InfiniteScrollComponent.tsx";
import * as helpers from '../utils/helpers.ts';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import  PayTim  from "./PayTim.tsx";
import HeaderComponent from "../components/HeaderComponent.tsx";

const IndexPage: React.FC<PageProps> = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    helpers.getDataFromGH(setItems);
  }, []);

  return (
    <Router>
      <div className="split-screen">
        <HeaderComponent></HeaderComponent>

    <div className="left-side">
      <Avatar avatar={AvatarData} />
      <div className="my-name"><p>Tim McHale</p></div>
      <div className="about-me">
      <br></br>
        <p>Currently learning React and web3, going deeper into the how the browser works.</p>
        <br></br>
        <p>Code should be concise, while changes in state should have simple, clear workflows.</p>
        <br></br>
        <p>Check out what I'm doing on <a href="https://twitter.com/mctim123">twitter</a></p>
        <br></br>
        {console.log(PDF)}
        <p>Copy of my <a href={PDF}>resume</a></p>
      </div>
    </div>

    <div className="right-side">
      <div className="my-name"><p>What I'm doing</p></div>
      <br />
      <div>
        <InfiniteScrollList items={items} getDataFromGH={helpers.getDataFromGH} />
      </div>
    </div>
    <Routes>
        <Route path="/PayTim" component={ PayTim } />
    </Routes>
  </div>
</Router>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Tim's web app</title>;
