import * as React from "react"
import Markdown from 'markdown-to-jsx'
import OpengraphReactComponent from 'opengraph-react';

export function Post({ description, content, link }) {

    return (
      <div className="my-subject">
        <p>{description}</p>
        <br/>
           <div className="my-text">
            <Markdown>{content}</Markdown>
            <br />
            <OpengraphReactComponent  
              site={link}  
              appId={"d0117daf-1d35-47c5-9eff-55f4d3be3da9"}  
              loader={<p></p>}  
              size={'medium'}/>
            </div>
            </div>
            
    );
  }