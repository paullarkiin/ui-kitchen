import styles from "./AnimatedGradientTwo.module.css";

export function AnimatedGradientTwo() {
  return (
    <div
      className={styles.gradientStage}
      role="img"
      aria-label="A softly animated pink, violet, and blue gradient"
    >
      <div className={styles.gradientTile} aria-hidden="true">
        <div className={styles.gradientWash} />
      </div>
    </div>
  );
}
