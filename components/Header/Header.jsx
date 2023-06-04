
"use client";
import React, { useRef, useEffect, useState } from "react";

import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button, Container } from "@mui/material";
import style from "../../styles/header.module.scss";
import { useRouter } from "next/router";
import CheckIcon from "@mui/icons-material/Check";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation, Trans } from "next-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
const Header = (props) => {
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  const headerRef = useRef(null);
  const headerTopRef = useRef(null)
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
      display: "About Us",
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
    headerTopRef.current.classList.toggle(`${style.header__top}`);
  };
  return (
    <header className={`${style.header_container}`}>
      {" "}
      <div ref={headerTopRef} className="header_top">
       
          <p>Create Unique Website for Your Business </p>
     
      </div>
      <nav className="header_nav" ref={headerRef}>
        <Container>
          <div className={`${style.nav__wrapper}`}>
            {/* ======== navigation logo ======== */}
            <div
              style={{
                width: matchesMedium ? 130 : 100,
                height: matchesMedium ? 70 : 70,
              }}
              className={`${style.logo}`}
              onClick={() => router.push("/")}
            >
              <Image
                height={"100"}
                width={"200"}
                priority

                style={{ cursor: "pointer" }}
                alt="foys logo"
                src="/foys_logo.png"
              ></Image>
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
                      className="nav__item"
                    >
                      <Link href={item.path} key={index}>
                        {item.display}
                      </Link>
                    </div>
                  ))}
                  {!matchesMedium && (
                    <div className=" d-flex align-items-center gap-2 mb-0">
                      <Button
                        size={"large"}
                        variant="outlined"
                        sx={{
                          padding: "8px 20px",
                          textTransform: "uppercase !important",
                          letterSpacing: "2px",
                        }}
                        onClick={() => {
                          router.push("/hire");
                        }}
                        endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
                      >
                        Hire
                      </Button>
                    </div>
                  )}
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
                        onClick={() => onToggleLanguageClick(el.path)}
                        className="language_item"
                      >
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          href=""
                          locale={el.path}
                        >
                          {el.title}
                        </a>
                        {locale == el.path && <CheckIcon></CheckIcon>}
                      </li>
                    ))}
                  </ul>
                </div>
                {matchesMedium && (
                  <p className=" d-flex align-items-center gap-2 mb-0">
                    <Button
                      size={matchesMedium ? "large" : "small"}
                      variant="outlined"
                      sx={{
                        padding: "8px 20px",
                        textTransform: "uppercase !important",
                        letterSpacing: "2px",
                      }}
                      onClick={() => {
                        router.push("/hire");
                      }}
                      endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
                    >
                      Hire
                    </Button>
                  </p>
                )}
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
