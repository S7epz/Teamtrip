import { register } from "@/app/session";

import { Button } from "@/app/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"


export default function signUp(){
    return(
        <>
          <div className="flex items-center justify-center h-screen">
            

            <Card className="w-[350px]">
              <CardHeader>

                <CardTitle>
                  Register
                </CardTitle>

              </CardHeader>
              <form 
                  action={ async (formData) => {
                      'use server'
                      await register(formData);
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
                  Sign up
                </Button>

              </CardFooter>
              </form>
            </Card>
            </div>
    </>
    )
}