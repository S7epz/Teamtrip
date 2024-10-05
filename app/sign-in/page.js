'use client'
 
import { useRouter } from 'next/navigation'
import { CgPassword } from "react-icons/cg";
import { RiH1 } from 'react-icons/ri';

export default function signIn(){

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



    return(
        <>
        <div className="container">
        <div className="cardLayout">
                <h1>
                    Login
                </h1>
                <form id="f1" name="f1" method="POST" action="/">
                    <div className="auth"> 
                        <p>E MAIL</p>
                        <input type="email" name="email" id="email" placeholder="email" size="30" required />
                        <p>PASSWORD</p>
                        <input type="password" name="password" id="password" placeholder="password" required />
                        <div id="extraDiv">
                        <a href="./altro" id="collegamento">Password dimenticata?</a>
                        
                        <input type="submit" value="Login" onClick={vai} />
                        </div>
                        
                    </div>
                </form>
                
            </div>
        </div>
            
            <style>
            {`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 70vh;
                    border-radius: 5px;
                }
                div.cardLayout{
                    display: flex;
                    flex-direction: column;
                    background: gray;
                    //height: 50%;
                    //width: 500px;
                    padding: 20px 40px 50px;
                    border-radius: 15px;
                    //border-sizing: border-box;
                }
                p{
                    color: white;
                }
                h1{
                    color: white
                }
                .buttonSubmit{
                    
                    
                    //text-align: right;
                }
                input[type=submit]{
                    border: none;
                    cursor: pointer;
                    padding: 7px 14px;
                    border-radius: 12px;
                    margin-top: 10px;
                }
                .collegamento{
                    color:white;
                    
                }
                .extraDiv{
                    display: flex;
                    flex-direction: column;
                }
            `}
            </style>
        </>
        
    )
}