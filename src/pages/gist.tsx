import * as React from "react"

// learn some typescript
//  need to learn about props/state other react stuff

const Gist = async() => {
    var gitHubUrl = `https://api.github.com/users/trmchale1/gists`;
        const response = await fetch(gitHubUrl);
        const jsonData = await response.json();
        console.log(jsonData[0]);
        return jsonData[0]["description"];
}

export default Gist
