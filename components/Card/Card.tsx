import styles from "components/Card/Card.module.css";
import Link from "next/link";

interface CardProps {
  title?: string;
  content: string;
  className?: string;
  link?: string;
}

export const Card = ({
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
      {link ? <Link href={link}>Read more</Link> : <></>}
    </div>
  );
};
