import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose"
import { createClient } from '@/utils/supabase/server'
import { AuthError } from "@supabase/supabase-js";

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);


export async function encrypt(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('10 minutes')
        .sign(key);
}

export async function decrypt(input) {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256'],
    });
    return payload;
}

export async function login(formData) {
  const supabase = await createClient();

    const data = { 
      email: formData.get("email"), 
      password: formData.get("password")
    };
  
    const { error } = await supabase.auth.signInWithPassword(data);

    if (!error) {
      // Scadenza in formato ISO string
      const expires = new Date(Date.now() + 600 * 1000).toISOString(); // 10 minuti da adesso ( 100 = 1 minuto )


      const sessionPayload = { 
        data, 
        expires,
        // I campi `iat` e `exp` verranno automaticamente gestiti da SignJWT
      };
  
      const session = await encrypt(sessionPayload);
      cookies().set('session', session, { expires: new Date(expires), httpOnly: true });
    }else{
      console.error("Login error:", error);
      return;
    }
  }

export async function logout() {
    cookies().set('session', '', { expires: new Date(0)});
}

export async function getSession() {
    const session = cookies().get('session')?.value;
    if(!session) return null;
    return await decrypt(session);
}

export async function register(formData){
  const supabase = await createClient()

    const data = { 
      email: formData.get("email"), 
      password: formData.get("password")
    };
  
    const { error } = await supabase.auth.signUp(data);


    if (!error) {
      // Scadenza in formato ISO string
      const expires = new Date(Date.now() + 600 * 1000).toISOString(); // 10 minuti da adesso
  
      const sessionPayload = { 
        data, 
        expires,
      };
  
      const session = await encrypt(sessionPayload);
      cookies().set('session', session, { expires: new Date(expires), httpOnly: true });

      console.error("Payload:", sessionPayload);
    }else{
      const response = await AuthError.name;

      console.log(response);
      
      
    }
}