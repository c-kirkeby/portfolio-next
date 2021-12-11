import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

interface CardProps {
  title?: string;
  content: string;
  className?: string;
  link?: string;
}

const Card = ({
  title = "test",
  content,
  className,
  link = undefined,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={className ? [styles.card, className].join(" ") : styles.card}
      {...props}
    >
      <h2 className={styles[`card-title`]}>{title}</h2>
      <p className={styles[`card-text`]}>{content}</p>
      {link ? <Link href={link}>Read blog post</Link> : <></>}
    </div>
  );
};

export default Card;
