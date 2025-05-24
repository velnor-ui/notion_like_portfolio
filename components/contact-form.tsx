"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import {
  IconBrandGmail,
  IconLoader2,
  IconMessage,
  IconSend,
  IconUser,
  IconX,
} from "@tabler/icons-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong.");
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});

      // Success notification
      toast.success("Message sent successfully!");
    } catch (error) {
      setErrors({
        submit: "Failed to send message. Please try again.",
        error: error as string,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-2">
      <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 p-8 shadow-sm">
        <div className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Name
              </label>
              <div className="relative">
                <IconUser
                  className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform transition-colors duration-200 ${
                    focusedField === "name"
                      ? "text-primary"
                      : "text-neutral-400"
                  }`}
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                  placeholder="Your full name"
                  className={`w-full rounded-lg border py-3 pl-10 pr-4 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.name
                      ? "border-red-300 bg-red-50"
                      : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="mt-1 flex items-center text-sm text-red-600">
                  <IconX className="mr-1 h-4 w-4" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <IconBrandGmail
                  className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform transition-colors duration-200 ${
                    focusedField === "email"
                      ? "text-primary"
                      : "text-neutral-400"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  placeholder="your@email.com"
                  className={`w-full rounded-lg border py-3 pl-10 pr-4 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 flex items-center text-sm text-red-600">
                  <IconX className="mr-1 h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <div className="relative">
              <IconMessage
                className={`absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform transition-colors duration-200 ${
                  focusedField === "subject"
                    ? "text-primary"
                    : "text-neutral-400"
                }`}
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField("")}
                placeholder="What's this about?"
                className={`w-full rounded-lg border py-3 pl-10 pr-4 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.subject
                    ? "border-red-300 bg-red-50"
                    : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400"
                }`}
              />
            </div>
            {errors.subject && (
              <p className="mt-1 flex items-center text-sm text-red-600">
                <IconX className="mr-1 h-4 w-4" />
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField("")}
              placeholder="Tell me about your project..."
              rows={6}
              className={`w-full resize-none rounded-lg border px-4 py-3 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.message
                  ? "border-red-300 bg-red-50"
                  : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400"
              }`}
            />
            {errors.message && (
              <p className="mt-1 flex items-center text-sm text-red-600">
                <IconX className="mr-1 h-4 w-4" />
                {errors.message}
              </p>
            )}
            <div className="mt-2 text-right">
              <span
                className={`text-sm ${formData.message.length > 10 ? "text-neutral-600" : "text-neutral-400"}`}
              >
                {formData.message.length} characters
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <IconLoader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <IconSend className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
