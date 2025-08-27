"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Loader2,
  MessageSquare,
  Send,
  User,
  X,
  Check,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";

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
  const [validFields, setValidFields] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [hasInteracted, setHasInteracted] = useState<{
    [key: string]: boolean;
  }>({});

  // Validation rules
  const validateField = (name: string, value: string) => {
    let error = "";
    let isValid = false;

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2)
          error = "Name must be at least 2 characters";
        else isValid = true;
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Invalid email address";
        else isValid = true;
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        else if (value.trim().length < 3)
          error = "Subject must be at least 3 characters";
        else isValid = true;
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.trim().length < 10)
          error = "Message must be at least 10 characters";
        else isValid = true;
        break;
    }

    return { error, isValid };
  };

  // Live validation
  useEffect(() => {
    const newErrors: { [key: string]: string } = {};
    const newValid: { [key: string]: boolean } = {};

    Object.keys(formData).forEach((field) => {
      if (hasInteracted[field]) {
        const { error, isValid } = validateField(
          field,
          formData[field as keyof typeof formData],
        );
        newErrors[field] = error;
        newValid[field] = isValid;
      }
    });

    setErrors(newErrors);
    setValidFields(newValid);
  }, [formData, hasInteracted]);

  // Handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (!hasInteracted[name]) {
      setHasInteracted((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = (field: string) => {
    setFocusedField("");
    setHasInteracted((prev) => ({ ...prev, [field]: true }));
  };

  // Field styles with dark mode
  const getFieldStyles = (field: string) => {
    const status = getFieldStatus(field);
    const isFocused = focusedField === field;

    const base =
      "w-full rounded-lg border py-3 px-4 pl-10 transition-all duration-200 focus:outline-hidden focus:ring-2 hover:border-neutral-400 dark:bg-neutral-900 dark:text-white";
    if (status === "error")
      return `${base} border-red-300 bg-red-50 focus:ring-red-500 dark:border-red-500/60 dark:bg-red-900/20`;
    if (status === "success" && !isFocused)
      return `${base} border-green-300 bg-green-50 focus:ring-green-500 dark:border-green-500/60 dark:bg-green-900/20`;
    if (isFocused)
      return `${base} border-primary-300 bg-primary-50 focus:ring-primary-500 dark:border-primary-500/60 dark:bg-primary-900/20`;
    return `${base} border-neutral-300 bg-white focus:ring-primary-500 dark:border-neutral-700`;
  };

  const getFieldStatus = (field: string) => {
    if (!hasInteracted[field]) return "default";
    if (errors[field]) return "error";
    if (validFields[field]) return "success";
    return "default";
  };

  const getFieldIcon = (field: string, defaultIcon: React.ReactNode) => {
    const status = getFieldStatus(field);
    const isFocused = focusedField === field;
    if (status === "success" && !isFocused)
      return <Check className="h-5 w-5 text-green-500" />;
    if (status === "error" && !isFocused)
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    return defaultIcon;
  };

  const validateAllFields = () => {
    const newErrors: { [key: string]: string } = {};
    let valid = true;

    Object.keys(formData).forEach((field) => {
      const { error } = validateField(
        field,
        formData[field as keyof typeof formData],
      );
      if (error) {
        newErrors[field] = error;
        valid = false;
      }
    });

    setErrors(newErrors);
    setHasInteracted({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    return valid;
  };

  const isFormValid = () =>
    Object.keys(formData).every(
      (field) =>
        validateField(field, formData[field as keyof typeof formData]).isValid,
    );

  // Submit handler
  const handleSubmit = async () => {
    if (!validateAllFields()) return;

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
    <div className="mx-auto mt-2 w-full max-w-2xl md:mr-4">
      <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
        {/* Header */}
        <div className="mb-6">
          <p className="text-neutral-600 dark:text-neutral-400">
            Send me a message and I&apos;ll reply as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Name
              </label>
              <div className="relative">
                <span className="absolute top-1/2 left-3 -translate-y-1/2">
                  {getFieldIcon("name", <User />)}
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Your full name"
                  className={getFieldStyles("name")}
                />
              </div>
              {errors.name && (
                <p
                  id="name-error"
                  role="alert"
                  className="mt-2 flex items-center text-sm text-red-600"
                >
                  <X className="mr-1 h-4 w-4" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Email
              </label>
              <div className="relative">
                <span className="absolute top-1/2 left-3 -translate-y-1/2">
                  {getFieldIcon("email", <Mail />)}
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="you@email.com"
                  className={getFieldStyles("email")}
                />
              </div>
              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  className="mt-2 flex items-center text-sm text-red-600"
                >
                  <X className="mr-1 h-4 w-4" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Subject
            </label>
            <div className="relative">
              <span className="absolute top-1/2 left-3 -translate-y-1/2">
                {getFieldIcon("subject", <MessageSquare />)}
              </span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus("subject")}
                onBlur={() => handleBlur("subject")}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                placeholder="What's this about?"
                className={getFieldStyles("subject")}
              />
            </div>
            {errors.subject && (
              <p
                id="subject-error"
                role="alert"
                className="mt-2 flex items-center text-sm text-red-600"
              >
                <X className="mr-1 h-4 w-4" /> {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={() => handleBlur("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Tell me about your project..."
              rows={6}
              className={getFieldStyles("message")}
            />
            {errors.message && (
              <p
                id="message-error"
                role="alert"
                className="mt-2 flex items-center text-sm text-red-600"
              >
                <X className="mr-1 h-4 w-4" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !isFormValid()}
            className={`text-primary-foreground flex w-full items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-hidden ${
              isSubmitting || !isFormValid()
                ? "bg-primary/50 cursor-not-allowed"
                : "focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 bg-primary hover:bg-primary/90"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" /> Send Message
              </>
            )}
          </button>

          {/* Feedback */}
          {errors.submit && (
            <p
              role="alert"
              className="mt-2 text-center text-sm text-red-600 dark:text-red-400"
            >
              <X className="mr-1 inline h-4 w-4" /> {errors.submit}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
