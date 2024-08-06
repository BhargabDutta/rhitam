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
    { text: "Home", link: "/home",image:home },
    { text: "About", link: "/about",image:about  },
    { text: "Services", link: "/services" ,image:services },
    { text: "Portfolio", link: "/portfolio" ,image:portfolio },
    { text: "Contact", link: "/schedule" ,image:contact },
  ];

  return (
    <Navbar
      isbordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black bg-opacity-50 fixed"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle className="text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
          <Image src={logo_whole} width="0" height="0" className="h-fit w-64  absolute left-0 right-0 m-auto" alt=""/>

      </NavbarContent>

   

      <NavbarMenu className="bg-black bg-opacity-50 w-fit">
        
          <NavbarMenuItem>
            <HoveredLink href="/home">
            <div className="w-full text-white text-base gap-4 mt-10 flex flex-row ">
              <Image src={home} alt="" width="0" height="0" className="w-5 h-fit "/>
              Home
            </div>
            </HoveredLink>

            <HoveredLink href="/about">
            <div className="w-full text-white text-base gap-4 mt-10 flex flex-row ">
              <Image src={about} alt="" width="0" height="0" className="w-5 h-fit "/>
              About
            </div>
            </HoveredLink>

            <HoveredLink href="/services">
            <div className="w-full text-white text-base gap-4 mt-10 flex flex-row ">
              <Image src={services} alt="" width="0" height="0" className="w-5 h-fit "/>
              Services
            </div>
            </HoveredLink>

            <HoveredLink href="/portfolio">
            <div className="w-full text-white text-base gap-4 mt-10 flex flex-row ">
              <Image src={portfolio} alt="" width="0" height="0" className="w-5 h-fit "/>
              Portfolio
            </div>
            </HoveredLink>

            <HoveredLink href="/schedule">
            <div className="w-full text-white text-base gap-4 mt-10 flex flex-row ">
              <Image src={contact} alt="" width="0" height="0" className="w-5 h-fit "/>
              Contact
            </div>
            </HoveredLink>
          </NavbarMenuItem>
        
      </NavbarMenu>
    </Navbar>
  );
}
