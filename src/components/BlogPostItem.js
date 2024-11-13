"use client";

// components/BlogPostItem.js
import Image from "next/image";
import styles from "./BlogPostItem.module.css";

const BlogPostItem = ({
  title,
  author,
  date,
  coverImage,
  url,
  socialImage,
  userImage,
  userName,
  userWebsite,
  type,
  description,
}) => (
  <div className={styles.blogPostCard}>
    {/* Image Section */}

    {socialImage && (
      <div className={styles.cardImage}>
        <Image src={socialImage} alt={title} layout="fill" objectFit="cover" />
      </div>
    )}
    {!socialImage && (
      <div className={styles.coverPlaceholder}>Image Unavailable</div>
    )}

    {/* Content Section */}
    <div className={styles.cardContent}>
      <span className={styles.typeLabel}>{type}</span>
      <h2 className={styles.title}>
        {title.length > 100 ? `${title.slice(0, 97)}...` : title}
      </h2>
      <p className={styles.description}>
        {" "}
        {description.length > 100
          ? `${description.slice(0, 97)}...`
          : description}
      </p>
    </div>

    {/* User Avatar Section */}
    <div className={styles.avatarLabelGroup}>
      <div className={styles.avatar}>
        <Image src={userImage} alt={userName} width={40} height={40} />
      </div>
      <div className={styles.textSection}>
        <span className={styles.authorName}>{userName}</span>
        <span className={styles.publishDate}>
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
    </div>
  </div>
);

export default BlogPostItem;
