"use client";
import React, { useRef, useEffect, useState } from "react";

import Link from "next/link";

import { Button, Container } from "@mui/material";
import style from "../../styles/header.module.scss";
import { useRouter } from "next/router";
import CheckIcon from "@mui/icons-material/Check";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation, Trans } from "next-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
const Header = (props) => {
  const headerRef = useRef(null);
  const [languageToggle, setlanguageToggle] = useState(false);
  const menuRef = useRef(null);
  const { locale, locales, push } = useRouter();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  // const { t: translate } = useTranslation("common");
  console.log(menuRef);
  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);
  const NAV__LINK = [
    {
      key: "1",
      path: "/",
      display: "Home",
    },
    {
      key: "2",
      path: "about-us",
      display: "About",
    },
    { key: "3", path: "service", display: "Services" },
    { key: "4", path: "demo", display: "Demo" },
    { key: "5", path: "contact", display: "Contact" },
  ];
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${style.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${style.header__shrink}`);
    }
  };
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, {
      scroll: false,
      locale: newLocale,
    });
    setlanguageToggle(!languageToggle);
  };

  const changeTo = router.locale === "en" ? "de" : "en";

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    menuRef.current.classList.toggle(`${style.menu__active}`);
  };
  return (
    <header className={`${style.header_container}`} ref={headerRef}>
      <nav className="header_nav">
        <Container>
          <div className={`${style.nav__wrapper}`}>
            {/* ======== navigation logo ======== */}
            <div className={`${style.logo}`}>
            <Image height={"50"} width="120"  src="/foys_logo.png"></Image>
            </div>

            {/* ========= nav menu =========== */}
            <div className="header_nav_right">
              <div
                className={`${style.navigation}`}
                ref={menuRef}
                onClick={toggleMenu}
              >
                <div className={`${style.nav__menu}`}>
                  {NAV__LINK.map((item, index) => (
                    <div
                      key={item.key}
                      onClick={() => {
                        setOpenMenu(false);
                      }}
                    >
                      <Link href={item.path} key={index}>
                        {item.display}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${style.nav__right}`}>
                <div className="header_language">
                  <button onClick={() => setlanguageToggle(!languageToggle)}>
                    {locale}
                  </button>
                  <ul
                    className={`language_container ${
                      languageToggle ? "activeMenu" : ""
                    }`}
                  >
                    {[
                      { key: "1", title: "English", path: "en" },
                      { key: "2", title: "German", path: "de" },
                    ].map((el) => (
                      <li
                        key={el.key}
                        onClick={() => onToggleLanguageClick(changeTo)}
                        className="language_item"
                      >
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          href=""
                          locale={changeTo}
                        >
                          {el.title}
                        </a>
                        {locale == el.path && <CheckIcon></CheckIcon>}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  <Button size="large" variant="outlined">
                    Get Started
                  </Button>
                </p>
              </div>

              <span
                onClick={() => {
                  toggleMenu();
                }}
                className={`${style.mobile__menu}`}
              >
                {!openMenu ? <MenuIcon></MenuIcon> : <CloseIcon></CloseIcon>}

                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};
export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["hero"])),
      // Will be passed to the page component as props
    },
  };
}
export default Header;
