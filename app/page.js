'use client'

import { useState } from 'react'
 
export default async function Home() {

  const [isAuth, setIsAuth] = useState(false);

  console.log(isAuth);

  return(
  <>
    {
      isAuth ? 
      (
        <p>logged</p>
      )
      :
      (
        <p>not logged</p>
      )
    }
  </>
  )

  function isAuthentic(){
    return(
    <>
      <p>Home page</p>
    </>
    )
    
  }

  function notAuth(){
    return(
      <>
      <p>not logged in</p>
    </>
    )
    
  } 
}
