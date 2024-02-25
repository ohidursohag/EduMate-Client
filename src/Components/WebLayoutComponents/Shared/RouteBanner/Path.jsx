"use client"

import { useEffect, useState } from "react";

const Path = () => {
   const [pathName,setPathName] =useState('')
useEffect(()=>{
   setPathName(window.location.pathname)
},[])
  return (
    <div>
       <div> {pathName} </div>
    </div>
  )
};

export default Path;
