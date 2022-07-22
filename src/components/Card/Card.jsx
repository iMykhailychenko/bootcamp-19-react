import styles from './Card.module.css';

// <div className={styles.item + ' ' + styles.card /* -> 'classname1' + ' ' + 'classname2' */}>
export const Card = () => {
  return (
    <div className={[styles.item, styles.card].join(' ')}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias aliquid atque consequatur cumque est
      expedita id illum labore laborum minus non obcaecati pariatur porro praesentium provident quisquam sequi unde.
    </div>
  );
};
