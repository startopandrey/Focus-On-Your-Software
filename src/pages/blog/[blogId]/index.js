import React, { useEffect, useState } from "react";
import Layout from "../../../../components/Layout/Layout";
import { useRouter } from "next/router";
import { data } from "../../../../data";
import styles from "../../../styles/post.module.scss";
import Link from "next/link";
import {
  Breadcrumbs,
  Chip,
  Container,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import { usePathname } from "next/navigation";
import { withRouter } from "next/router";
import json2mq from "json2mq";
import Head from "next/head";
const Post = (props) => {
  const postData = props.postData;
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 768,
    })
  );
  const colors = [
    "#6380F7",
    "#f05c60",
    "#F5B066",
    "#6380F7",
    "#f05c60",
    "#F5B066",
  ];
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href={`/blog`}>
      Blog
    </Link>,
    <Typography
      sx={
        !matchesMedium && {
          textOverflow: "ellipsis",
          overflow: "hidden",
          width: "160px",
          height: "1.5rem",
          whiteSpace: "nowrap",
        }
      }
      key="3"
      color="text.primary"
    >
      {postData?.title}
    </Typography>,
  ];

  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/logo_small.png" />
        <title>{postData.title}</title>
        <meta name="description" content={postData.title} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>

        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta property="og:title" content={postData.title} />
      </Head>
      <main className={styles.post}>
        <section className={styles.post_hero}>
          <div className={styles.hero_header}>
            <Container className={styles.hero_header_conatainer}>
              <h1 className={styles.hero_header_title}>{postData.title}</h1>
              <div className={styles.hero_header_image}>
                <Image height={380} width={680} src={postData.image}></Image>
              </div>
            </Container>
          </div>
          <div className={styles.post_breadcrumbs}>
            <Container>
              <Breadcrumbs
                maxItems={!matchesMedium ? 1 : 3}
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Container>
          </div>
          <Container>
            <div className={styles.post_author}>
              <div className={styles.post_author_image}>
                <Image
                  width={50}
                  height={50}
                  src={postData.authorImage}
                ></Image>
              </div>
              <div className={styles.post_author_content}>
                <div className={styles.author_content_info}>
                  <h4>{postData.author}</h4>
                  <time>{postData.date}</time>
                </div>
                <Chip
                  sx={{ background: "#F0F0F0" }}
                  label={postData.postType}
                />
              </div>
            </div>
          </Container>{" "}
          <Divider></Divider>
        </section>
        <section className={styles.post_articles}>
          <Container>
            <div className={styles.post_articles_container}>
              {postData.articles.map((article) => {
                return (
                  <article key={article.title} className={styles.post_article}>
                    {article.title && (
                      <h1 className={styles.article_title}>{article.title}</h1>
                    )}
                    {article.description && (
                      <p className={styles.article_description}>
                        {article.description}
                      </p>
                    )}
                    {article.paragraphs &&
                      article.paragraphs.map((paragraph, i) => {
                        return (
                          <p key={paragraph} className={styles.article_paragraph}>
                            {paragraph.map((paragraphRow) => {
                              if (typeof paragraphRow == "string") {
                                return paragraphRow;
                              }
                              if (paragraphRow.path) {
                                return (
                                  <Link
                                  key={paragraphRow.text}
                                    className={styles.article_paragraph_link}
                                    href={paragraphRow.path}
                                  >
                                    {` ${paragraphRow.text} `}
                                    <LaunchIcon></LaunchIcon>
                                  </Link>
                                );
                              }
                              if (paragraphRow.strong) {
                                return (
                                  <strong key={paragraphRow.text} href={paragraphRow.path}>
                                    {` ${paragraphRow.text} `}
                                  </strong>
                                );
                              }
                            })}
                          </p>
                        );
                      })}
                    {article.enumerationList &&
                      article.enumerationList.map((paragraph, i) => {
                        return (
                          <ul key={paragraph} className={styles.article_enumeration}>
                            <li className={styles.enumeration_item}>
                              <span
                                style={{ background: colors[i] }}
                                className={styles.enumeration_circle}
                              >
                                {i + 1}
                              </span>
                              <p>
                                {paragraph.map((paragraphRow) => {
                                  if (typeof paragraphRow == "string") {
                                    return paragraphRow;
                                  }
                                  if (paragraphRow.path) {
                                    return (
                                      <Link
                                      key={paragraphRow.text}
                                        className={styles.enumeration_item_link}
                                        href={paragraphRow.path}
                                      >
                                        {` ${paragraphRow.text} `}
                                        <LaunchIcon></LaunchIcon>
                                      </Link>
                                    );
                                  }
                                  if (paragraphRow.strong) {
                                    return (
                                      <strong key={paragraphRow.path} href={paragraphRow.path}>
                                        {` ${paragraphRow.text} `}
                                      </strong>
                                    );
                                  }
                                })}
                              </p>
                            </li>
                          </ul>
                        );
                      })}
                    {article.videos &&
                      article.videos.map((videos) => (
                        <div key={videos.url} className={styles.article_video}>
                          <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src={videos.url}
                          ></iframe>
                        </div>
                      ))}
                    {article.images &&
                      article.images.map((image) => (
                        <div key={image.path} className={styles.article_image}>
                          <Image
                            width={1000}
                            height={500}
                            src={image.path}
                            alt={image.alt}
                          ></Image>{" "}
                        </div>
                      ))}
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      </main>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const post = data.find((post) => context.query.blogId == post.urlTitle);

  return {
    props: { postData: post }, // will be passed to the page component as props
  };
}
export default Post;
