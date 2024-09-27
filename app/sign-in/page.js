import { CgPassword } from "react-icons/cg";

export default function signIn(){

    const handleSubmit = (event) => {
        
        const email = formData.get("email");
        const password = formData.get("password");
    


        

        console.log("work");

    }


    return(
        <>
            <div className="login">
                <h2>
                    Login
                </h2>
                <form name="login" onSubmit={handleSubmit}>
                    <input type="email" id="email" placeholder="email" size="30" required />
                    <input type="password" id="password" placeholder="password" required />
                    <input type="submit" value="submit" />
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
        </>
        
    )
}