// SignupFormDemo.tsx
"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Calender from "./Calender";

const uniqueGreetings = [
  "Hello there, {firstName}! We're excited to get in touch with you.",
  "Hi {firstName}! Our team will reach out to you shortly.",
  "Greetings {firstName}! We'll be contacting you soon.",
  "Hey {firstName}! Expect to hear from us very soon.",
  "Welcome {firstName}! We'll connect with you shortly.",
];

export function SignupFormDemo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generate a unique greeting
    const greeting = uniqueGreetings[Math.floor(Math.random() * uniqueGreetings.length)].replace("{firstName}", firstName);
    
    // Show the greeting message
    setGreetingMessage(greeting);
    setShowGreeting(true);

    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      selectedDate,
    };

    try {
      const response = await fetch("/api/send-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const handleCloseGreeting = () => {
    setShowGreeting(false);
  };

  return (
    <>
      <div className="p-10 h-full w-full mx-auto rounded-none md:rounded-2xl shadow-input bg-black">
        <h2 className="font-bold text-5xl text-neutral-200 w-full mt-20">
          Get on board with Cineaste
        </h2>
        <p className="text-sm w-full mt-2 text-neutral-300">
          Schedule a meet and we&apos;ll get in touch with you
        </p>

        <form className="my-8 justify-center items-center md:gap-16" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row my-8 justify-center items-center md:gap-16">
          <div className="w-full h-full mb-4 md:mb-0">
            <div className="flex flex-col md:flex-row md:space-x-2 mb-4">
              <LabelInputContainer className="md:w-1/2">
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </LabelInputContainer>
              <LabelInputContainer className="md:w-1/2">
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="number">Phone Number</Label>
              <Input
                id="number"
                placeholder="0123456789"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </LabelInputContainer>
          </div>

          <div className="flex align-middle justify-center space-y-4 w-full">
            <Calender setValue={setSelectedDate} />
          </div>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Schedule &rarr;
            <BottomGradient />
          </button>
        </form>
        

        {showGreeting && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-14">
              <div className="p-4 w-auto max-w-md bg-black backdrop-blur-sm bg-opacity-hover text-white rounded-md flex flex-col items-center justify-center border">
                <button
                  className="w-full text-right text-white text-5xl"
                  onClick={handleCloseGreeting}
                >
                  &times;
                </button>
                <p className="text-3xl h-auto w-auto md:p-16 p-10">{greetingMessage}</p>
              </div>
            </div>
          </>
        )}

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
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
