import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  ref,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "mx-auto max-w-5xl px-2 py-4 sm:px-4 md:px-6 md:py-6 lg:px-8 lg:py-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
