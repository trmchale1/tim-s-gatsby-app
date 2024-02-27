import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import MarkdownComponent from "./markdownComponent.tsx";
import * as helpers from '../utils/helpers.ts';

const InfiniteScrollList = ({ items, getDataFromGists }) => {
    return (
        <InfiniteScroll
        dataLength={items.length}
        next={getDataFromGists}
        hasMore={true}
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}>
    <ul>
    {items.map(item => (
      <li key={item.key}>
        <ul>
          <li>{helpers.formatDate(item.created_at)}</li>
          <li className="my-subject">{item.description}</li>
          
        </ul>
        <br />
        <ul>
          {item.files.map(file => (
            <MarkdownComponent markdownContent={file.content} />
          ))}
        </ul>
        <br />
        <button onClick={event => helpers.htmlToGist(item.html_url)}>Check out this gist on github <a href="https://github.com" target="_blank" rel="noopener noreferrer"><img src="https://octodex.github.com/images/original.png" alt="GitHub" width="50" height="50" /></a></button>
        
      </li>
    ))}
    <br />
  </ul>
  </InfiniteScroll>
    )
};

export default InfiniteScrollList;