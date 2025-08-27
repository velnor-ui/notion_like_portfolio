import React from "react";
import { socialLinks } from "@/constants/contact";

const SocialLinks = () => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Find me on</h3>
      <div className="flex space-x-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg border p-3 transition-all duration-200 hover:border-neutral-400 hover:shadow-xs`}
            title={social.label}
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
