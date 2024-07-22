"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/portfolio">
        <MenuItem setActive={setActive} active={active} item="Portfolio"/></HoveredLink>
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Video Editing</HoveredLink>
            <HoveredLink href="/interface-design">Video Production</HoveredLink>
            <HoveredLink href="/seo">Content Writing</HoveredLink>
            <HoveredLink href="/branding">Website Design</HoveredLink>
          </div> */}
        {/* </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="  text-sm grid grid-cols-1 gap-5 p-0">
            <ProductItem
              title="Video Editing"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="description"
            />
            <ProductItem
              title="Video Production"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="description"
            />
            <ProductItem
              title="Content Writing"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="description"
            />
            <ProductItem
              title="Web design"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="description"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Schedule a meeting</HoveredLink>
            <HoveredLink href="/individual">Call Us</HoveredLink>
            <HoveredLink href="/team">Email Us</HoveredLink>
            {/* <HoveredLink href="/enterprise">Enterprise</HoveredLink> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
