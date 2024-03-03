// components/InfiniteScrollComponent.tsx
import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import MarkdownComponent from "./markdownComponent.tsx";
import * as helpers from '../utils/helpers.ts';

const InfiniteScrollList = ({ items, getDataFromGists }) => {
  // Check if 'items' is defined and an array before mapping over it
  if (!items || !Array.isArray(items)) {
    return null;  // or handle it in a way that makes sense for your application
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={getDataFromGists}
      hasMore={true}
      loader={<p>Loading...</p>}
      endMessage={<p>No more data to load.</p>}
    >
      <ul>
        {items.map((item) => (
          <li key={item.key}>
            <ul>
              <li>{helpers.formatDate(item.created_at)}</li>
              <li className="my-subject">{item.description}</li>
              <li className="my-text">{item.content}</li>
            </ul>
            <br />
            <ul>
              {item.files && Array.isArray(item.files) ? (
                item.files.map((file) => (
                  <MarkdownComponent key={file.filename} markdownContent={file.content} />
                ))
              ) : null}
            </ul>
            <br />
            <ul>
            {item.activity_type || 'commit'} was made to {item.branch || 'main'}
            <br />
            <button onClick={(event) => helpers.htmlToGist(item.html_url)}>
              Check it out on Github
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="https://octodex.github.com/images/original.png" alt="GitHub" width="50" height="50" />
              </a>
            </button>
            </ul>
          </li>
        ))}
        <br />
      </ul>
    </InfiniteScroll>
  );
};

export default InfiniteScrollList;