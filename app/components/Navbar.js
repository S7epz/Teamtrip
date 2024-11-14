
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import  ThemeToggle  from "@/components/themeToggle"
import { getSession, logout } from "@/app/session";
import { redirect } from "next/navigation";
import { Style } from "@/app/components/NavStyle.css";

export default async function NavbarComponent() {
  const session = await getSession();

  return (
    <div className="navcontainer">
    <Navbar className="navcontent">
      <NavbarContent> 
      <Link className="navcontent pr-4" href="/">Teamtrip</Link>

        <NavbarItem>
          <Button as={Link} href="/altro" variant="flat" className="navcontent">
            Altro
          </Button>
        </NavbarItem>
         {session? (
          <form 
          action={ async () => {
              'use server'
              await logout();
              redirect('/');
            }
          }
        >
          <NavbarItem>
            <Button color="primary" type="submit" variant="flat" className="navcontent">
              Logout
            </Button>
          </NavbarItem>
        </form>
        
         ):(

          <NavbarItem>
              <Button as={Link} color="primary" href="/login" variant="flat" className="navcontent">
                login
              </Button>
          </NavbarItem>
        )
        
         }
                

          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
      </NavbarContent>

    </Navbar>
    </div>
  );
}