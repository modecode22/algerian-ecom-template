import React from "react";
import LocaleSwitcher from "../LocaleSwitcher";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SideBar from "../SideBar";
import HeaderLink from "../HeaderLink";
import HeaderLogo from "../HeaderLogo";
import ToggleThemeButton from "../ToggleThemeButton";

const Header = async ({ lang }: { lang: Locale }) => {
  const {
    navigation,
    header: { cta },
  } = await getDictionary(lang);
  const HeaderLinks = [
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
    {
      id: navigation.contact,
      label: navigation.contact,
      originalLink: "/contact",
    },
    {
      id: navigation.about,
      label: navigation.about,
      originalLink: "/about",
    },
  ];
  return (
    <>
      <header className="p-wrapper top-0 z-50 flex h-16 w-full">
        <div className="border-wrapper flex w-full items-center justify-between">
          <section className="flex items-center justify-center gap-6">
            <section className="hidden items-center justify-center gap-6 xl:flex">
              {HeaderLinks.map((link) => {
                return (
                  <HeaderLink key={link.originalLink} originalLink={link.originalLink} lang={lang} label={link.label} />
                );
              })}
            </section>
            <SideBar lang={lang} HeaderLinks={HeaderLinks} />
            <LocaleSwitcher lang={lang} />
            <ToggleThemeButton />
          </section>
          <HeaderLogo lang={lang} />
        </div>
      </header>
    </>
  );
};

export default Header;
