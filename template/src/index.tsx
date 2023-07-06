import styles from './index.module.css';
const Demo = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="https://avatars.githubusercontent.com/u/28588609?s=96&v=4" />
      <p className={styles.text}>
        <span className={styles.letter}>Welcome</span>
        <span className={styles.letter}>&nbsp;</span>
        <span className={styles.letter}>to</span>
        <span className={styles.letter}>&nbsp;</span>
        <span className={styles.letter}>use</span>
        <span className={styles.letter}>&nbsp;</span>
        <span className={styles.letter}>Moga</span>
      </p>
    </div>
  );
};
export default Demo;
