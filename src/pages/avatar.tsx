import * as React from "react"
import { useEffect, useState } from "react"


export function Avatar({ avatar }) {
    console.log(avatar)
    return (
      <div>
        <img src={avatar} alt="Avatar" className="avatar"/> 
    </div>
    );
  }