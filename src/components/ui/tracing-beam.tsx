"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-4xl mx-auto h-full ${className}`}
    >
      
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
