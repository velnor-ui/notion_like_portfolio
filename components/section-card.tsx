import React from "react";
import { Card, CardContent } from "./ui/card";
import { IconCalendar, IconMapPin, IconStar } from "@tabler/icons-react";

const SectionCard = ({
  title,
  subtitle,
  location,
  description,
  achievements,
  period,
  isExperience,
}: {
  title: string;
  subtitle: string;
  location: string;
  description: string;
  achievements: string[];
  period: string;
  isExperience?: boolean;
}) => {
  return (
    <Card className="group border-neutral-200 bg-white/80 backdrop-blur-sm hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:border-neutral-700">
      <CardContent className="p-4 sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300 sm:text-2xl">
                {title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
                <span className="font-medium">{subtitle}</span>
                <span className="flex items-center gap-1">
                  {isExperience && <IconMapPin className="h-4 w-4" />}
                  {location}
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
              {description}
            </p>

            <div className="space-y-2 text-sm sm:text-base">
              <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                Key Achievements:
              </h4>
              <ul className="space-y-1">
                {achievements.map((achievement: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <IconStar className="mt-0.5 h-4 w-4 fill-current text-neutral-400" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500 sm:text-sm">
            <IconCalendar className="h-4 w-4" />
            <span className="whitespace-nowrap font-medium">{period}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionCard;
