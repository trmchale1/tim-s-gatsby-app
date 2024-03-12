// components/InfiniteScrollComponent.tsx
import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import MarkdownComponent from "./markdownComponent.tsx";
import * as helpers from '../utils/helpers.ts';
import push from "../images/cloud-arrow.jpeg"
import git_thumb from "../images/git_thumb.jpeg"


const InfiniteScrollList = ({ items, getDataFromGH }) => {

  // Check if 'items' is defined and an array before mapping over it
  if (!items || !Array.isArray(items)) {
    return null;  // or handle it in a way that makes sense for your application
  }
  return (
    <InfiniteScroll
  dataLength={items.length}
  next={getDataFromGH}
  hasMore={true}
  loader={<p>Loading...</p>}
  endMessage={<p>No more data to load.</p>}
>
  <ul>
    {items.map((item) => (
      <li key={item.key} className="item-container">
        <ul>
          <li className="my-date">{helpers.formatDate(item.timestamp)}</li>
        
          <li className="my-subject">{item.description}</li>
        </ul>
        
        <ul>
            <MarkdownComponent key={item.key} markdownContent={item.content} />
        </ul>
        

  <ul className="my-text">
  <li>
    {item.activity_type || 'commit'} was made to {item.branch || 'main'} in the {item.repo || "tim-s-gatsby-app"} repo <img src={git_thumb} className="thumbnail" />
  </li>
</ul>

        <button className="button" onClick={(event) => helpers.htmlTo(item.html_link)}>
          Check it out on Github
          <a href={item.html_link} target="_blank" rel="noopener noreferrer">
            <img src="https://octodex.github.com/images/original.png" alt="GitHub" width="50" height="50" />
          </a>
        </button>
      </li>
    ))}
    
  </ul>
</InfiniteScroll>
  );
};

export default InfiniteScrollList;
