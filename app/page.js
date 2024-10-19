'use client'

import { useAuth } from '@/lib/AuthContext'


export default function Home() {
  const { isAuth } = useAuth();

  return(
  <>
  <div>
  <h1>Home page</h1>
    {isAuth ? <p>logged in </p> : <p>Not logged in</p>}
  </div>

  </>
  
  )
}
