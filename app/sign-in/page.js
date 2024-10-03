<<<<<<< HEAD
'use client'
 
import { useRouter } from 'next/navigation'
=======
>>>>>>> teamtrip/main
import { CgPassword } from "react-icons/cg";

export default function signIn(){

<<<<<<< HEAD
    function vai(){
        event.preventDefault();
        
            let email = document.getElementById("email").value;
            let passcode = document.f1.password.value;
            const Cemail = "user@mail.com";
            const Cpasscode = "1234";
            
            if(email == Cemail && passcode == Cpasscode){
                document.getElementById("f1").submit();
            }
            
        
    }


=======
    const handleSubmit = (event) => {
        
        const email = formData.get("email");
        const password = formData.get("password");
    


        

        console.log("work");

    }

>>>>>>> teamtrip/main

    return(
        <>
            <div className="login">
                <h2>
                    Login
                </h2>
<<<<<<< HEAD
                <form id="f1" name="f1" method="POST" action="/">
                    <input type="email" name="email" id="email" placeholder="email" size="30" required />
                    <input type="password" name="password" id="password" placeholder="password" required />
                    <input type="submit" value="submit" onClick={vai} />
                    <h1 id="h1" name="h1" style={{visibility:"hidden"}}>Mangai</h1>
=======
                <form name="login" onSubmit={handleSubmit}>
                    <input type="email" id="email" placeholder="email" size="30" required />
                    <input type="password" id="password" placeholder="password" required />
                    <input type="submit" value="submit" />
>>>>>>> teamtrip/main
                </form>
                
            </div>
            <style>
            {`
                div.login{
                    position: absolute;
                    margin: auto;
                    inset: 200px;
                    width: 50%;
                    border: 3px solid gray;
                    padding: 8px;
                    background: black;
                    color: white;
                    border-radius: 15px;
                }
                h2{
                    display: flex;
                    justify-content: center;
                    padding-top: 15px;
                }
            `}
            </style>
<<<<<<< HEAD

=======
>>>>>>> teamtrip/main
        </>
        
    )
}