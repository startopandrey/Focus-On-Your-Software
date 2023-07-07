import Link from "next/link";
import styles from "../../../src/styles/post-block.module.scss";
import React from "react";
import Image from "next/image";
import { Chip, Divider } from "@mui/material";

const PostBlock = ({post}) => {
  return (
    <Link href={`/blog/${post.urlTitle}`}>
      <article className={styles.blog_article_item}>
        <div className={styles.article_item_img}>
          <Image width={450} height={300} src={post.image}></Image>
        </div>
        <div className={styles.article_item_content}>
          {" "}
          <div className={styles.article_block_author}>
            <time pubDate datetime="2023-06-16T07:07:00Z">
              {post.date}
            </time>
            <Divider orientation="vertical" flexItem></Divider>
            <address>{post.author}</address>
            <Chip sx={{ background: "#F0F0F0" }} label={post.postType} />
          </div>
          <h3 className={styles.article_item_title}>{post.title} </h3>
          <p className={styles.article_description}>{post.description}</p>
        </div>
      </article>
    </Link>
  );
};

export default PostBlock;
