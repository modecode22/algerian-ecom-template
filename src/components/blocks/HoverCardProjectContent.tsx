import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LuCalendarDays } from "react-icons/lu";
import { Project } from "@/data/moncefData";
import { Locale } from "@/i18n.config";
import { getArabicDateString, getDateString } from "@/lib/utils";
import Image from "next/image";
type HoverCardProjectContentProps = {
  project: Project;
  lang: Locale;
};
const HoverCardProjectContent = ({ project, lang }: HoverCardProjectContentProps) => {
  const projectDate =
    project.date && lang === "ar" ? getArabicDateString(project.date) : project.date && getDateString(project.date);
  return (
    <section className="flex gap-3 space-x-4">
      <section>
        <div className="relative h-[40px] w-[40px]">
          <Image
            alt={`${project.project_name} logo`}
            src={project.project_logo}
            fill
            className="rounded-full object-contain"
          />
        </div>
      </section>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">{project.project_name}</h4>
        <p className="text-sm">{lang === "ar" ? project.project_description_ar : project.project_description}</p>
        {project.date && (
          <div className="flex items-center pt-2">
            <LuCalendarDays className="mx-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-muted-foreground text-xs">{projectDate}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default HoverCardProjectContent;
