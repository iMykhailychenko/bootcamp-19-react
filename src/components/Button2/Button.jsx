import styles from './Button.module.css';

console.log(styles);

export const Button2 = () => {
  return (
    <button className={styles.btn} type="button">
      click me
    </button>
  );
};
