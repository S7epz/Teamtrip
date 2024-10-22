
import { login, getSession, logout } from "@/app/session";

import { Button } from "@/app/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation";


export default async function signIn(){
  const session = await getSession();
    return(
        <>
          <div className="flex items-center justify-center h-screen">
            

            <Card className="w-[350px]">
              <CardHeader>

                <CardTitle>
                  Login
                </CardTitle>

              </CardHeader>
              <form 
                  action={ async (formData) => {
                      'use server'
                      await login(formData);
                      if(!session)
                        redirect("/");
                    }
                  }
                >
              <CardContent>
                
                  
                  <Input // Email input 
                    type="email"
                    name="email"
                    placeholder="E-mail" 
                    required
                  />

                  <Input // Password input
                    type="password"
                    name="password"
                    className="mt-5" 
                    placeholder="Password" 
                    required
                  />
                  
              </CardContent>

              <CardFooter className="flex !items-end w-full"> 
                <Button // Submit the form
                  type="submit"
                >
                  Login
                </Button>

              </CardFooter>
              </form>
            </Card>
            </div>
    </>
        
    )
}