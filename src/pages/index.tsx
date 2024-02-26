import * as React from "react"
import { useState, useEffect, useRef } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Post } from "./post.tsx"
import { Avatar } from "./avatar.tsx"
import PDF from "./resume1.pdf"
import InfiniteScroll from 'react-infinite-scroll-component';
import Gists from "./gists.json"


// ****** New Branch map-inner-object-and-render

// how should we implemet data in GatsbyActivity.json, commits are a little verbose, perhaps pull requests? => implement new data
// keep the content feature from the gists? If so, needs a function that requests the content from the url. => add content
// right side add scolling feature

const htmlToGist = (link) => {
  window.location.href = link;
 
}

const IndexPage: React.FC<PageProps> = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  
    const getDataFromGists = async() => {
      setIsLoading(true);
      setError(null);
      try {
        setItems(prevItems => [...prevItems, ...Gists]);

        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
    }
    
    useEffect(() => {
      getDataFromGists();
    }, []);

  return (
    <div className="split-screen">
      <div className="left-side">
      <div className="my-name"><p>Tim McHale</p></div>
      <div className="about-me">
        <br></br>
        <br></br>
        <p>Currently living that indie dev lifestyle.</p>
        <br></br>
        <br></br>
        <p>Code should be concise, while changes in state should have simple, clear workflows.</p>
        <br></br>
        <br></br>
        <p>Check out what I'm doing on <a href="https://twitter.com/mctim123">twitter</a></p>        
        <br></br>
        <br></br>
        <p>Copy of my <a href={PDF} target="blank">Resume</a></p>
        </div>
      </div>
      
      <div className="right-side">
        <div className="my-name"><p>What I'm doing</p></div>
        <div className="my-subject">
        <InfiniteScroll
          dataLength={items.length}
          next={getDataFromGists}
          hasMore={true} // Replace with a condition based on your data source
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        ><ul>
        {items.map(item => (
          <>
          <ul>
          <li>{item.description}</li>
          <li>{item.created_at}</li>
          <li>{item.description}</li>
          <ul>
          {Object.values(item.files).map(file => (
              <li key={file.filename}>{file.filename}</li>
            ))}
          </ul>
        </ul>
          <button onClick={event => htmlToGist(item.html_url)}>Click this button</button>
          </>
        ))}
      </ul></InfiniteScroll>
        </div>
);
        </div>
      </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Tim's web app</title>
