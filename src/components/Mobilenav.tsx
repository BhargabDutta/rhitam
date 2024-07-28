"use client"
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { HoveredLink } from "./ui/navbar-menu";
import Image from "next/image";
import logolight from "@/components/logolight.png";
import home from "@/components/home.png";
import about from "@/components/about.png";
import services from "@/components/services.png";
import portfolio from "@/components/portfolio.png";
import contact from "@/components/contact.png";
import logo_whole from "@/components/logo_whole.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { text: "Home", link: "/",image:home },
    { text: "About", link: "/about",image:about  },
    { text: "Services", link: "/services" ,image:services },
    { text: "Portfolio", link: "/portfolio" ,image:portfolio },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black bg-opacity-50 fixed"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
          <Image src={logo_whole} width="0" height="0" className="h-fit w-64" alt=""/>

      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {/* Your brand logo or text */}
          {/* <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>
      </NavbarContent>
{/* 
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu className="bg-black bg-opacity-50 w-fit">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.text}-${index}`}>
            <HoveredLink href={item.link}>
            <div className="w-full text-white text-2xl gap-4 mt-10 flex flex-row ">
              <Image src={item.image} alt="" width="0" height="0" className="w-8 h-fit"/>
              {item.text}
            </div>
            </HoveredLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
