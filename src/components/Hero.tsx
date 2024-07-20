"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import thumb1 from "@/components/thumb1.png";
import thumb2 from "@/components/thumb2.png";
import thumb3 from "@/components/thumb3.png";
import thumb4 from "@/components/thumb4.png";
import thumb5 from "@/components/thumb5.png";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      thumb1.src,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
    thumb2.src,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
    thumb3.src,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
    thumb4.src,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
    thumb5.src,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
    thumb1.src,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
    thumb2.src,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
    thumb3.src,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
    thumb4.src,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
    thumb5.src,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
    thumb1.src,
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
    thumb2.src,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
    thumb3.src,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
    thumb4.src,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
    thumb5.src,
  },
];
