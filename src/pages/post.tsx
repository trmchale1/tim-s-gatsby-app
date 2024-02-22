import * as React from "react"

export function Post({ description, content, link }) {

    return (
      <div>
           <p>{description}</p>
           <p>{content}</p>
           <p>{link}</p>
      </div>
    );
  }