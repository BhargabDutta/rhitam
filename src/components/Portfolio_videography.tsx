"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";
import logolight from "@/components/logolight.png";
import thumb5 from "@/components/thumb5.png";

export function CanvasRevealEffectDemo2() {
  return (
    <>
    
      <div className="py-20 flex flex-col items-center justify-center bg-white dark:bg-black w-full mx-auto px-8">
      <h1 className="text-2xl md:text-4xl text-left font-bold dark:text-white pl-12 w-screen">
          Videography
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <Card
            image={thumb5.src}
            icon={<AceternityIcon />}
            mt="mt-20"  // Add margin-top for each card
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>
          <Card
            image={thumb5.src}
            icon={<AceternityIcon />}
            mt="mt-20"  // Different margin-top example
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>
          <Card
            image={thumb5.src}
            icon={<AceternityIcon />}
            mt="mt-20"  // Different margin-top example
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>

          <Card
            image={thumb5.src}
            icon={<AceternityIcon />}
            mt="mt-20"  // Add margin-top for each card
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>
          <Card
            image={thumb5.src}
            icon={<AceternityIcon />}
            mt="mt-20"  // Different margin-top example
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>
          <Card
            image={thumb5.src}
            icon={<AceternityIcon />}
            mt="mt-20"  // Different margin-top example
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>
          {/* Add more Card components with different mt values as needed */}
        </div>
      </div>
    </>
  );
}

const Card = ({
  image,
  icon,
  children,
  mt = "mt-0"  // Default margin-top value if not provided
}: {
  image: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  mt?: string;  // Margin-top prop
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] ${mt}`}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute z-20 text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center mt-40">
          {icon}
        </div>
        <h2 className="relative z-10 mt-4 font-bold text-black group-hover/canvas-card:text-white transition duration-200">
          <img 
            src={image} 
            alt="" 
            className={`h-96 w-full transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-60'}`} 
          />
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <Image src={logolight.src} alt="logo" width={100} height={100} />
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
