import * as React from "react"
import { useEffect, useState } from "react"


export function Post( ) {
    const getUserData = async () => {  
        var gh_key = "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";
        var gitHubUrl = `https://api.github.com/users/trmchale1/gists`;
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        // how do we abstract this md file, make it generic for all .md files
        console.log(jsonData[0])
        const gist_raw_url = jsonData[0]["files"]["fallback.md"]["raw_url"]
        const gist_raw = await fetch(gist_raw_url);
        const raw_content = await gist_raw.text();
        console.log(raw_content);
        return raw_content;
        // we are getting the raw content of the md file, what to do with it?
        // how many characters to include in a summary?
        // can we get the title of the gist?

    };
    const some_var = getUserData();
    // having trouble rendering the md data from getUserData(), need to learn about props/state other react stuff
    
    return (
      <div>
    
        </div>
    );
  }