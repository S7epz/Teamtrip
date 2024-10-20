
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import  ThemeToggle  from "@/components/themeToggle"

export default function NavbarComponent() {


  return (
    <div className="flex w-screen border-b border-gray-200">
    <Navbar isBordered className="max-w-screen-lg">
      <NavbarBrand>
        <p className="font-bold text-inherit pl-4">Teamtrip</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 flex-grow" />


      <NavbarContent className="justify-end">

      <NavbarItem>
          <Button as={Link} href="/" variant="flat">
            Home
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} href="/altro" variant="flat">
            Altro
          </Button>
        </NavbarItem>

            <NavbarItem>
              <Button as={Link} color="primary" variant="flat">
                Logout
              </Button>
            </NavbarItem>

            <NavbarItem>
              <Button as={Link} color="primary" href="/sign-in" variant="flat" >
                Sign Up
              </Button>
          </NavbarItem>
            
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
      </NavbarContent>

    </Navbar>
    </div>
  );
}