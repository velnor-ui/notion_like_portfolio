import {
  IconBrandGmail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

//Update Your Contact Information
export const contactMethods = [
  {
    icon: IconBrandGmail,
    label: "Email",
    value: "hello@yourname.com",
    href: "mailto:hello@yourname.com",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "text-green-600",
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
    color: "text-red-600",
  },
];

//Update Your Social Links
export const socialLinks = [
  {
    icon: IconBrandGithub,
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
  },
  {
    icon: IconBrandX,
    label: "X",
    href: "https://twitter.com/yourusername",
  },
];
