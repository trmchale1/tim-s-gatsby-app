import * as React from "react"
import { useEffect, useState } from "react"


export function Post({ post }) {
    const getUserData = async () => {  
        var gitHubUrl = `https://api.github.com/users/trmchale1`;
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        console.log(jsonData)
    };
    getUserData();
    return (
      <div>
        <p>Blog post {post}</p>
        </div>
    );
  }