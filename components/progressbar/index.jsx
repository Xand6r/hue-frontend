import styles from "./progressbar.module.scss";

function ProgressBar({ percentage = 0 }) {
  return (
    <div className={styles.progresscontainer}>
      <div className={styles.blankline} />
      <div className={styles.filledline} style={{ width: `${percentage}%` }} />
    </div>
  );
}

export default ProgressBar;