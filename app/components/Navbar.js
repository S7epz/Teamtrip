'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export default function NavbarComponent() {
  const { setTheme } = useTheme();
  return (
    <div className="flex justify-center w-full border-b border-gray-200">
    <Navbar isBordered variant="floating" className="w-full max-w-screen-lg">
      <NavbarBrand>
        <p className="font-bold text-inherit pl-4">Teamtrip</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">

        
        <NavbarItem>
          <Button as={Link} color="primary" href="/sign-in" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>



        <NavbarItem>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </NavbarItem>

      </NavbarContent>
    </Navbar>
    </div>
  );
}