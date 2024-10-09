'use client'
 
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
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
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function signIn(){

  const router = useRouter();

    async function vai(){
      event.preventDefault();
      const mail="user@mail.com";
      const pass="1234";

      let email = document.f1.email.value;
      let passcode = document.f1.password.value;

      if(mail == email && pass == passcode){
        router.push("/");
      }
      
    }

    return(
        <>
        <div className="flex items-center justify-center h-screen">
        <form name="f1" >
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            
              <Input name="email" placeholder="E-mail" required/>
              <Input name="password" className="mt-5" placeholder="Password" required/>
            
          </CardContent>
          <CardFooter className="flex !items-end w-full">
            <Button type="submit" onClick={vai}>
              Login
            </Button>
          </CardFooter>
        </Card>
        </form>
        </div>
    </>
        
    )
}