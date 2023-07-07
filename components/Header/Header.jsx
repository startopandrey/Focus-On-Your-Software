"use client";
import React, { useRef, useEffect, useState } from "react";

import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
} from "@mui/material";
import styles from "../../src/styles/header.module.scss";
import { useRouter } from "next/router";
import CheckIcon from "@mui/icons-material/Check";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation, Trans } from "next-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import RemoveIcon from "@mui/icons-material/Remove";
const Header = (props) => {
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 992,
    })
  );
  const headerRef = useRef(null);
  const headerTopRef = useRef(null);
  const [languageToggle, setlanguageToggle] = useState(false);
  const menuRef = useRef(null);
  const { locale, locales, push } = useRouter();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  // const { t: translate } = useTranslation("common");

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);
  const NAV__LINK = [
    {
      key: "3",
      path: "service",
      display: "Solutions",
      dropdowns: [
        {
          title: "Development",
          items: [
            {
              key: "1",
              path: "/solution/website",
              display: "Website",
              description: "Create website from scretch",
            },
            {
              key: "2",
              path: "/solution/website",
              display: "Mobile Application",
              description: "App that works for both IOS & Android",
              disabled: true,
            },
            {
              key: "3",
              path: "/solution/website",
              display: "Data Managment",
              description: "Unique system were you can manage everything",
              disabled: true,
            },
          ],
        },
        {
          title: "Improve",
          items: [
            {
              key: "1",
              path: "/solution/marketing",
              display: "Marketing",
              description: "Show your business to more people",
            },
            {
              key: "2",
              path: "/solution/marketing",
              display: "Customer Service",
              description: "Give faster answer to questions",
              disabled: true,
            },

            {
              key: "3",
              path: "/solution/marketing",
              display: "Business Redesign",
              description: "Make your business look better",
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      key: "6",
      path: "demo",
      display: "Digitalization",
      type: "withImage",

      dropdowns: [
        {
          disabled: true,
          title: "Business Digitalization",
          path: "/solution/marketing",
          items: [
            {
              key: "1",
              path: "service",
              display: "Website",
              description:
                "Meet our profional team online or phisicly all around the Europe",
            },
          ],
          image:
            "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=2000&t=st=1688637594~exp=1688638194~hmac=b64c40a1edd2062e3e78ca210c27205208609c41dae36f6538f651c9bab07497",
          description:
            "Take control of your business with digital technologies.",
        },
      ],
    },
    {
      key: "1",
      path: "/",
      display: "Resources",
      type: "withImage",

      dropdowns: [
        {
          title: "Blogs",
          path: "/blog",
          items: [
            {
              key: "1",
              path: "service",
              display: "Website",
              description: "Create website from scretch",
            },
          ],
          image: "/header/blog.png",
          description:
            "Check out our blogs, they'll give you more tips on how to improve your business.",
        },
        {
          title: "Events",
          image: "/header/event.png",
          path: "/events",
          items: [
            {
              key: "1",
              path: "/events",
              display: "Website",
              description: "Create website from scretch",
            },
          ],

          description:
            "You can get more information about the topic you're interested by visiting our events all around Europe.",
        },
      ],
    },
    //  { key: "4", path: "demo", display: "Demo" },

    {
      key: "5",
      path: "/contact",
      display: "Contact",
      type: "withImage",

      dropdowns: [
        {
          title: "About Us",
          path: "/about-us",
          items: [
            {
              key: "1",
              path: "service",
              display: "Website",
              description:
                "Meet our profional team online or phisicly all around the Europe",
            },
          ],
          image: "/header/about-us.jpg",
          description:
            "You can find our skilled team online or in person all over Europe.",
        },
        {
          path: "/contact",
          title: "Contact",
          image: "/header/contact.jpg",
          items: [
            {
              key: "1",
              path: "service",
              display: "Website",
              description: "Create website from scretch",
            },
          ],

          description:
            "Please feel free to contact us. We can have a short call to resolve your issue.",
        },
      ],
    },
  ];
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef?.current?.classList.add(styles.header__shrink);
    } else {
      headerRef?.current?.classList.remove(styles.header__shrink);
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

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    menuRef.current.classList.toggle(styles.menu__active);
    headerTopRef.current.classList.toggle(styles.header__top);
  };
  const NavDesktop = () => {
    return (
      <div className={styles.nav__menu}>
        {NAV__LINK.map((item, index) => (
          <div
            key={item.key}
            onClick={() => {
              setOpenMenu(false);
            }}
            className={styles.nav__item}
          >
            <div className={styles.nav__item_link}>
              <h4 className={styles.item_link} href={item.path} key={index}>
                {item.display}
              </h4>{" "}
              {item?.dropdowns && (
                <ArrowDropDownIcon
                  className={styles.nav__item_icon}
                ></ArrowDropDownIcon>
              )}
            </div>

            {item?.dropdowns ? (
              <div
                className={`${styles.nav__item_dropdown} ${
                  item.type == "withImage" &&
                  styles.nav__item_dropdown_horizontal
                }`}
              >
                {item?.dropdowns.map((block) => {
                  return item.type != "withImage" ? (
                    <div
                      key={block.title}
                      className={`${styles.dropdown_row} ${
                        block.disabled && styles.dropdown_row_disabled
                      }`}
                    >
                      <h3 className={styles.title}>{block.title}</h3>{" "}
                      <ul className={styles.dropdown_row_list}>
                        {block.items.map((el) => (
                          <li
                            className={`${
                              el.disabled && styles.dropdown_row_disabled
                            }`}
                            key={el.key}
                          >
                            <Link
                              sx={{ cursor: "none", pointerEvents: "auto" }}
                              href={el.disabled ? {} : el.path}
                            >
                              {el.display}
                            </Link>
                            <p>{el.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={block.path ?? "/blog"}
                      key={block.title}
                      className={`${styles.dropdown_row_horizontal} ${
                        block.disabled && styles.dropdown_row_disabled
                      }`}
                    >
                      <div className={styles.dropdown_row_image}>
                        {" "}
                        <Image
                          width={150}
                          height={150}
                          src={`${block.image}`}
                        ></Image>
                      </div>

                      <div>
                        <h3 className={styles.title}>{block.title}</h3>

                        <p className={styles.description}>
                          {block.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
        {!matchesMedium && (
          <div className={`d-flex align-items-center gap-2 mb-0`}>
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
              endIcon={<ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>}
            >
              Hire
            </Button>
          </div>
        )}
      </div>
    );
  };
  const NavMobile = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <div className={styles.nav__menu}>
        <div className={`d-flex align-items-center gap-2 mb-0`}>
          <Button
            size={"large"}
            fullWidth
            variant="outlined"
            sx={{
              padding: "8px 20px",
              textTransform: "uppercase !important",
              letterSpacing: "2px",
              fontSize: "1.2rem",
              mb: 2,
            }}
            onClick={() => {
              router.push("/hire");
            }}
            endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
          >
            Hire
          </Button>
        </div>
        {NAV__LINK.map((item, index) => (
          <Accordion
            key={item.key}
            // onClick={() => {
            //   setOpenMenu(false);
            // }}

            sx={{ mb: 2 }}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            className={styles.nav_mobile__item}
          >
            <AccordionSummary
              sx={{ display: "flex", justifyContent: "space-between" }}
              className={styles.nav__item_link}
            >
              <h4 className={styles.item_link} key={index}>
                {item.display}
              </h4>
              {expanded !== `panel${index}` ? (
                <AddIcon className={styles.nav__item_icon}></AddIcon>
              ) : (
                <RemoveIcon className={styles.nav__item_icon}></RemoveIcon>
              )}
            </AccordionSummary>

            {item?.dropdowns ? (
              <AccordionDetails className={styles.nav__item_dropdown}>
                {item?.dropdowns.map((block) =>
                  item?.type != "withImage" ? (
                    <div key={block.title} className={styles.dropdown_row}>
                      <div>
                        <h3 className={styles.title}>{block.title}</h3>{" "}
                      </div>
                      <ul className={styles.dropdown_row_list}>
                        {block.items.map((el) => (
                          <li key={el.key}>
                            <Link href={el.path}>{el.display}</Link>
                            <p>{el.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link href={block?.path ?? "/"}  key={block.title}>
                      <h3 style={{ fontSize: "1.1rem",marginBottom: "1rem", color: "#222",lineHeight: "1.5rem" }}>{block.title}</h3>{" "}
                      <p style={{ paddingLeft: "1rem", color: "#999999",lineHeight: "1.5rem" ,marginBottom: "1rem",}}>{block.description}</p>
                    </Link>
                  )

                )}
              </AccordionDetails>
            ) : (
              ""
            )}
          </Accordion>
        ))}
      </div>
    );
  };

  return (
    <header className={styles.header_container}>
      {" "}
      <div ref={headerTopRef} className={styles.header_top}>
        <p>Create Unique Website for Your Business </p>
      </div>
      <nav className={styles.header_nav} ref={headerRef}>
        <Container sx={{ background: "#fff" }}>
          <div className={styles.nav__wrapper}>
            {/* ======== navigation logo ======== */}
            <div
              style={{ width: matchesMedium ? 130 : 100, height: 70 }}
              className={`${styles.logo} logo`}
              onClick={() => router.push("/")}
            >
              <Image
                height={100}
                width={200}
                priority
                styles={{ cursor: "pointer", objectFit: "contain" }}
                alt="foys logo"
                src="/foys_logo.png"
              ></Image>
            </div>

            {/* ========= nav menu =========== */}
            <div className={styles.header_nav_right}>
              <div
                className={styles.navigation}
                ref={menuRef}
                // onClick={toggleMenu}
              >
                {!matchesMedium ? (
                  <NavMobile></NavMobile>
                ) : (
                  <NavDesktop></NavDesktop>
                )}
              </div>
              <div className={styles.nav__right}>
                <div className={styles.header_language}>
                  <button onClick={() => setlanguageToggle(!languageToggle)}>
                    {locale}
                  </button>
                  <ul
                    className={`${styles.language_container} ${
                      languageToggle ? styles.activeMenu : ""
                    }`}
                  >
                    {[
                      { key: "1", title: "English", path: "en" },
                      { key: "2", title: "German", path: "de" },
                    ].map((el) => (
                      <li
                        key={el.key}
                        onClick={() => onToggleLanguageClick(el.path)}
                        className={styles.language_item}
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
                  <p className={` d-flex align-items-center gap-2 mb-0`}>
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
                      endIcon={
                        <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
                      }
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
                className={styles.mobile__menu}
              >
                {!openMenu ? <MenuIcon></MenuIcon> : <CloseIcon></CloseIcon>}

                <i className={`ri-menu-line`}></i>
              </span>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["hero"])),
      // Will be passed to the page component as props
    },
  };
}
export default Header;
