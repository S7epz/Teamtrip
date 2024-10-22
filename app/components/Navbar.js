
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import  ThemeToggle  from "@/components/themeToggle"
import { getSession, logout } from "@/app/session";
import { redirect } from "next/navigation";

export default async function NavbarComponent() {
  const session = await getSession();

  return (
    <div className="flex w-screen border-b border-gray-200">
    <Navbar isBordered className=" justify-end">
      <NavbarBrand>
        <Link className="font-bold text-inherit pl-4" href="/">Teamtrip</Link>
      </NavbarBrand>

      


      <NavbarContent className="mr-2">

        <NavbarItem>
          <Button as={Link} href="/altro" variant="flat">
            Altro
          </Button>
        </NavbarItem>
        { session? (
          <form 
          action={ async () => {
              'use server'
              await logout();
              redirect('/sign-in');
            }
          }
        >
          <NavbarItem>
            <Button color="primary" variant="flat" type="submit">
              Logout
            </Button>
          </NavbarItem>
        </form>
        ) : (
          <NavbarItem>
              <Button as={Link} color="primary" href="/sign-in" variant="flat" >
                Sign In
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