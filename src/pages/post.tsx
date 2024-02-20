import * as React from "react"
import { useEffect, useState } from "react"


export function Post({ post }) {
    const getUserData = async () => {  
        var gh_key = "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";
        var gitHubUrl = `https://api.github.com/users/trmchale1/gists`;
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        // how do we abstract this md file, make it generic for all .md files
        console.log(jsonData[0]["files"]["fallback.md"]["raw_url"])
        const gist_raw = jsonData[0]["files"]["fallback.md"]["raw_url"]

        // we are getting the raw content of the md file, what to do with it?
        // how many characters to include in a summary?
        // can we get the title of the gist?
        
    };
    getUserData();
    return (
      <div>
        <p>Blog post {post}</p>
        </div>
    );
  }