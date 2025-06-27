"use client";

import React from "react";
import { contactMethods } from "@/constants/contact";

const ContactMethods = () => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
      <div className="space-y-3">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            className={`flex items-center rounded-lg border p-4 transition-all duration-200 hover:border-neutral-300 hover:shadow-sm`}
          >
            <div className="flex-shrink-0">
              <method.icon className={`h-5 w-5 ${method.color}`} />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {method.label}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {method.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMethods;
