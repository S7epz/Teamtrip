'use client'

import { redirect } from "next/navigation";
import { useState } from 'react'

import { Button } from "@/app/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"



export default function signIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    function login(event){
      event.preventDefault();
      const validMail="user@mail.com";
      const validPass="1234";

      
      if(email == validMail && password == validPass){
        redirect("/");
      }else{
        alert("login fallito");
      }
      
    }
    

    return(
        <>
          <div className="flex items-center justify-center h-screen">
            <form name="f1" onSubmit={login}>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Login</CardTitle>
              </CardHeader>
              <CardContent>
                
                  <Input 
                    name="email" 
                    type="email"
                    placeholder="E-mail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input 
                    name="password" 
                    type="password"
                    className="mt-5" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                
              </CardContent>

              <CardFooter className="flex !items-end w-full">
                <Button type="submit">
                  Login
                </Button>

              </CardFooter>
            </Card>
            </form>
            </div>
    </>
        
    )
}