import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import styles from "../../styles/blog.module.scss";
import { Chip, Container, Divider, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { data } from "../../../data";
import useStateRef from "react-usestateref";
import PostBlock from "../../../components/UI/PostBlock/PostBlock";
import Head from "next/head";
const Blog = ({ postsData }) => {
  const [posts, setPosts] = useState([]);
  const [checkboxListPosts, setCheckboxListPosts, currentCheckboxListPosts] =
    useStateRef([]);
  useEffect(() => {
    console.log(postsData);
    setPosts(postsData);
  }, [postsData]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCheckboxListPosts(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(currentCheckboxListPosts.current);
    const filteredData = () => {
      if (currentCheckboxListPosts.current.length <= 0) {
        return postsData;
      }
      return postsData.filter((el) =>
        currentCheckboxListPosts.current.includes(el.postType)
      );
    };

    // console.log();
    // console.log(checkboxListPosts);
    setPosts(filteredData);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const categories = [
    "Digital Marketing",
    "SEO",
    "SMM",
    "Website",
    "Web Design",
    "Data Managment",
    "Customer Service",
    "Mobile Application",
    "Digitalization",
  ];
  return (
    <Layout>
            <Head>
        <link rel="shortcut icon" href="/logo_small.png" />
        <title>{"Create Website Blog"}</title>
        <meta name="description" content={"Blog about all IT topics"} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>

        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta property="og:title" content={"Blog about all IT topics"} />
      </Head>
      <div className={styles.blog}>
        <section className={styles.blog_teaser}>
          <Container>
            <div className={styles.blog_teaser_container}>
              <Link href={`/blog/${data[0].urlTitle}`}>
                <article
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  className={styles.teaser_main_block}
                >
                  <div className={styles.main_block_img}>
                    <Image
                      width={450}
                      height={250}
                      alt={'about us backgound image'}
                      src={"/about-us-bg-1.jpg"}
                    ></Image>
                  </div>
                  <div className={styles.main_block_author}>
                    <time pubDate datetime="2023-06-16T07:07:00Z">
                      {data[0].date}
                    </time>
                    <Divider orientation="vertical" flexItem></Divider>
                    <address>{data[0].author}</address>
                    <Chip
                      sx={{ background: "#F0F0F0" }}
                      label={data[0].postType}
                    />
                  </div>
                  <header className={styles.main_block_header}>
                    <h2 className={styles.main_block_title}>{data[0].title}</h2>
                    <p className={styles.main_block_description}>
                      {data[0].description}
                    </p>
                  </header>
                </article>
              </Link>
              <div item lg={6} md={6} sm={12} className={styles.teaser_aside}>
                <ul className={styles.teaser_list}>
                  {[...data.slice(1)].map((post) => (
                    <li key={post.urlTitle}>
                      {" "}
                      <Link href={`/blog/${post.urlTitle}`}>
                        <article className={styles.teaser_item}>
                          <div className={styles.teaser_item_img}>
                            <Image
                              width={200}
                              height={200}
                              src={post.image}
                  alt={"title blog"}
                            ></Image>
                          </div>
                          <div className={styles.teaser_item_info}>
                            {" "}
                            <Chip
                              sx={{ background: "#F0F0F0" }}
                              label={post.postType}
                            />
                            <h3>{post.title}</h3>
                          </div>
                        </article>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
        <Divider></Divider>
        <section className={styles.blog_article}>
          <Container>
            <header className={styles.blog_article_header}>
              <h2 className={styles.blog_article_title}>All articles</h2>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Topic</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={checkboxListPosts}
                  onChange={handleChange}
                  input={<OutlinedInput label="Topic" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                  IconComponent={() => (
                    <ExpandMoreIcon sx={{ mr: "1rem" }}></ExpandMoreIcon>
                  )}
                >
                  {categories.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox
                        checked={checkboxListPosts.indexOf(name) > -1}
                      />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </header>
            <ul className={styles.blog_article_list}>
              {posts.map((post) => (
                <li key={post}>
                  <PostBlock post={post}></PostBlock>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </div>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  return {
    props: { postsData: data }, // will be passed to the page component as props
  };
}
export default Blog;
