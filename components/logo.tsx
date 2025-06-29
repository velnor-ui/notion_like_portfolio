import React from "react";
import Link from "next/link";
import MotionDiv from "./MotionDiv";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <MotionDiv
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold"
      >
        {/* Enter your name here */}
        Portfolio
      </MotionDiv>
    </Link>
  );
};

export default Logo;
