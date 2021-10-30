import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles[`card-title`]}>{title}</h2>
      <p className={styles[`card-text`]}>{content}</p>
      <Link href="/blog/1">Read more</Link>
    </div>
  );
};

export default Card;
