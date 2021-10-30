import styles from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <svg
      width={35}
      height={35}
      viewBox="0 0 256 256"
      className={styles.logo}
      {...props}
    >
      <circle className={styles.background} cx={125} cy={125} r={125} />
      <g>
        <rect
          transform="skewX(-15)"
          width={55.5}
          height={100}
          x={100}
          y={75}
          className={styles.foreground}
        />
        <rect
          transform="skewX(-15)"
          width={55.5}
          height={45}
          x={165.5}
          y={75}
          className={styles.foreground}
        />
        <rect
          transform="skewX(-15)"
          width={55.5}
          height={45}
          x={165.5}
          y={130}
          className={styles.foreground}
        />
      </g>
    </svg>
  );
};
export default Logo;
