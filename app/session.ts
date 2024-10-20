import { cookies } from "next/headers";
import { SignJWT, jwtVerify, JWTPayload } from "jose"


const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

interface User {
    email: string;
    password: string;
  }
  
  interface SessionPayload extends JWTPayload {
    user: User;
    expires: string;
  }

export async function encrypt(payload: SessionPayload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('10 minutes')
        .sign(key);
}

export async function decrypt(input: string): Promise<SessionPayload> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256'],
    });
    return payload as SessionPayload;
}

export async function login(formData: FormData) {
    const user: User = { 
      email: formData.get("email") as string, 
      password: formData.get("password") as string
    };
  
    if (user.email === "user@mail.com" && user.password === "1234") {
      // Scadenza in formato ISO string
      const expires = new Date(Date.now() + 10 * 60 * 1000).toISOString(); // 10 minuti da adesso
  
      const sessionPayload: SessionPayload = { 
        user, 
        expires,
        // I campi `iat` e `exp` verranno automaticamente gestiti da SignJWT
      };
  
      const session = await encrypt(sessionPayload);
      cookies().set('session', session, { expires: new Date(expires), httpOnly: true });
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
