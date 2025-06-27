import { LucideIcon } from "lucide-react";
import {
  Code,
  Server,
  Palette,
  Cloud,
  Smartphone,
  Box,
  Database,
  Layers,
  Cpu,
  Terminal,
  FileCode,
  HardDrive,
  Workflow,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Server,
  Palette,
  Cloud,
  Smartphone,
  React: Box,
  Next: Layers,
  TypeScript: FileCode,
  Node: Cpu,
  Tailwind: Terminal,
  MongoDB: Database,
  PostgreSQL: Database,
  GraphQL: Workflow,
  Docker: HardDrive,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name];
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  return null;
}
