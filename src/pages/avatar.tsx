import * as React from "react"
import { useEffect, useState } from "react"
import AvatarData from "./avatar.json"


export function Avatar({ avatar }) {
    console.log(avatar)
    return (
      <div>
        <img src={ avatar.avatar } alt="Avatar" className="avatar"/> 
    </div>
    );
  }