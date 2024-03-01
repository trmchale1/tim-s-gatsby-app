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
      endMessage={<p>No more data to load.</p>}
    >
      <ul>
        {items.map(item => (
          <li key={item.key}>
            <ul>
              <li className="my-text">{helpers.formatDate(item.created_at)}</li>
              <li className="my-subject">{item.description}</li>
            </ul>
            <br />
            <pre className="code_block">
              <code>
                {item.files.map(file => (
                  <MarkdownComponent key={file.id} markdownContent={file.content} />
                ))}
              </code>
            </pre>
            <br />
            <button className="button" onClick={event => helpers.htmlToGist(item.html_url)}>
              <span>Check out this gist on GitHub</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="https://octodex.github.com/images/original.png" alt="GitHub" width="30" height="30" />
              </a>
            </button>
          </li>
        ))}
        <br />
      </ul>
    </InfiniteScroll>
  );
};

export default InfiniteScrollList;