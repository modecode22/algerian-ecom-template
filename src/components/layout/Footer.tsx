import { Locale } from "@/i18n.config";
import Link from "next/link";
import React from "react";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiTwitterXFill,
  RiPhoneLine,
  RiMailLine,
  RiMessageLine,
} from "react-icons/ri";
import { getDictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/styles/ui/button";
import Tooltip from "@/components/blocks/Tooltip";
import SelanceStroke from "../icons/SelanceStroke";
import SimpleLogo from "../icons/SimpleLogo";
import CustomLink from "../Link";
const Footer = async ({ lang }: { lang: Locale }) => {
  const {
    navigation,
    footer: { copyright, nav, contact },
  } = await getDictionary(lang);
  const links = [
    {
      id: navigation.home,
      label: navigation.home,
      originalLink: "/",
    },
    {
      id: navigation.services,
      label: navigation.services,
      originalLink: "/#services",
    },
    {
      id: navigation.blog,
      label: navigation.blog,
      originalLink: "/blog",
    },
  ];
  const contactLinks = [
    {
      id: navigation.projects,
      label: navigation.projects,
      originalLink: "/#projects",
    },
    {
      id: navigation.about,
      label: navigation.about,
      originalLink: "/about",
    },
  ];
  return (
    <footer className="mt-12">
      <section className="p-wrapper bg-white from-primary-800 via-primary-950 to-primary-950 py-6 dark:bg-gradient-to-b">
        <span dir="ltr" className="flex w-full">
          <SimpleLogo />
        </span>
        <section className="mt-12 flex justify-between gap-6">
          <nav className="flex flex-col gap-4 sm:flex-row sm:gap-12">
            <section className="flex flex-col gap-4">
              {links.map((link) => {
                return (
                  <CustomLink
                    className="hover:text-primary-500  dark:hover:text-neutral-50 font-semibold text-neutral-900 dark:text-neutral-200 sm:text-lg"
                    key={link.originalLink}
                    href={link.originalLink}
                    lang={lang}
                  >
                    {link.label}
                  </CustomLink>
                );
              })}
            </section>
            <section className="flex flex-col gap-4">
              {contactLinks.map((link) => {
                return (
                  <CustomLink
                    className="hover:text-primary-500  dark:hover:text-neutral-50 font-semibold text-neutral-900 dark:text-neutral-200 sm:text-lg"
                    key={link.originalLink}
                    href={link.originalLink}
                    lang={lang}
                  >
                    {link.label}
                  </CustomLink>
                );
              })}
            </section>
          </nav>
          <section className="flex flex-col gap-4">
            <CustomLink
              lang={lang}
              href="/contact"
              className="flex items-center gap-2 font-semibold text-primary-500 dark:text-neutral-300 dark:hover:text-neutral-50 hover:text-primary-200  sm:text-lg"
            >
              <RiMessageLine className="size-4 sm:size-5" />
              <span className="">{contact.contact_us}</span>
            </CustomLink>
            <Link
              href="mailto:contact@selance.com"
              className="flex items-center gap-2 font-semibold text-primary-500 dark:text-neutral-300 dark:hover:text-neutral-50 hover:text-primary-200  sm:text-lg"
            >
              <RiMailLine className="size-4 sm:size-5" />
              <span className="">contact@selance.com</span>
            </Link>
            <Link
              href="tel:+213782903876"
              className="flex items-center gap-2 font-semibold text-primary-500 dark:text-neutral-300 dark:hover:text-neutral-50  hover:text-primary-200 sm:text-lg"
            >
              <RiPhoneLine className="size-4 sm:size-5" />
              <span dir="ltr" className="">
                +213 782 90 38 76
              </span>
            </Link>
          </section>
        </section>
      </section>
      <section className="p-wrapper relative min-h-40 bg-primary-500 dark:bg-primary-950 py-6 lg:min-h-96 border-t border-primary-900">
        <SelanceStroke className="absolute bottom-0 left-0 right-0 top-0 h-40 w-full lg:h-96" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="relative z-10 flex gap-4">
            <Tooltip label={"Github"}>
              <Link
                href="https://github.com/selance"
                target="_blank"
                aria-label="Selance Github"
                className={cn(buttonVariants({ variant: "light-ghost", size: "icon" }), "text-neutral-50")}
              >
                <RiGithubFill />
              </Link>
            </Tooltip>

            <Tooltip label={"Twitter"}>
              <Link
                href="https://x.com/Selanceteam"
                aria-label="Selance Twitter"
                target="_blank"
                className={cn(buttonVariants({ variant: "light-ghost", size: "icon" }), "text-neutral-50")}
              >
                <RiTwitterXFill />
              </Link>
            </Tooltip>

            <Tooltip label={"Linkedin"}>
              <Link
                aria-label="Selance Linkedin"
                href="https://www.linkedin.com/company/selance"
                target="_blank"
                className={cn(buttonVariants({ variant: "light-ghost", size: "icon" }), "text-neutral-50")}
              >
                <RiLinkedinFill />
              </Link>
            </Tooltip>

            <Tooltip label={"Facebook"}>
              <Link
                aria-label="Selance Facebook"
                href="https://www.facebook.com/profile.php?id=61553900574614"
                target="_blank"
                className={cn(buttonVariants({ variant: "light-ghost", size: "icon" }), "text-neutral-50")}
              >
                <RiFacebookFill />
              </Link>
            </Tooltip>
          </div>
          <div className="relative z-10 text-center text-sm text-neutral-50">{copyright}</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
