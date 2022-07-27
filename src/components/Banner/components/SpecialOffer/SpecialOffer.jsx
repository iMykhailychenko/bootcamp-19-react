import styles from './SpecialOffer.module.css';

export const SpecialOffer = () => {
  return (
    <>
      <h3 className={styles.title}>ТЕРМІНОВО! ПРОДАМ ГАРАЖ</h3>
      <img
        alt="Гараж"
        className={styles.img}
        src="https://raw.githubusercontent.com/iMykhailychenko/bootcamp-19-react/module-3-lesson-1/src/components/Banner/components/SpecialOffer/407f503405e4ad187970a5873d2756a0.jpeg"
      />
    </>
  );
};
