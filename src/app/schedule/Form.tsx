"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Calender from "./Calender";


export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
    <div className="p-10 h-full w-full mx-auto rounded-none md:rounded-2xl shadow-input bg-black">
      <h2 className="font-bold text-5xl text-neutral-200 w-full mt-20">
        Get on board with Cineaste
      </h2>
      <p className="text-sm w-full mt-2text-neutral-300">
        Schedule a meet and we&apos;ll get in touch with you
      </p>

      <form className="my-8 flex flex-col md:flex-row  justify-center items-center md:gap-16" onSubmit={handleSubmit}>
  <div className=" w-full h-full mb-4 md:mb-0">
    <div className="flex flex-col md:flex-row md:space-x-2 mb-4">
      <LabelInputContainer className="md:w-1/2">
        <Label htmlFor="firstname">First name</Label>
        <Input id="firstname" placeholder="Tyler" type="text" />
      </LabelInputContainer>
      <LabelInputContainer className="md:w-1/2">
        <Label htmlFor="lastname">Last name</Label>
        <Input id="lastname" placeholder="Durden" type="text" />
      </LabelInputContainer>
    </div>
    <LabelInputContainer className="mb-4">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
    </LabelInputContainer>

    <LabelInputContainer className="mb-4">
      <Label htmlFor="number">Phone Number</Label>
      <Input id="email" placeholder="0123456789" type="number" />
    </LabelInputContainer>
  </div>

  <div className="flex align-middle justify-center space-y-4 w-full">
    <Calender />
  </div>
</form>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Schedule &rarr;
          <BottomGradient />
        </button>
    </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
