import image from './407f503405e4ad187970a5873d2756a0.jpeg';
import styles from './SpecialOffer.module.css';

export const SpecialOffer = () => {
  return (
    <>
      <h3 className={styles.title}>ТЕРМІНОВО! ПРОДАМ ГАРАЖ</h3>
      <img className={styles.img} src={image} alt="" />
    </>
  );
};
