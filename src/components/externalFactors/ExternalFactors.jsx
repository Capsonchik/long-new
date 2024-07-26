import styles from './styles.module.scss';
import {Button} from "rsuite";

export const ExternalFactors = () => {
  return (
    <div className={styles.externalContainer}>
      <div className={styles.factors}>
        <span>Внешние факторы</span>
        <div className={styles.factorsContent}>
          <Button className={styles.btn}>test</Button>
          <Button className={styles.btn}>test</Button>
          <Button className={styles.btn}>test</Button>
          <Button className={styles.btn}>test</Button>
          <Button className={styles.btn}>test</Button>
        </div>
      </div>
      <div className={styles.factors}>
        <span>Внешние факторы</span>
        <div className={styles.factorsContent}>
          <Button className={styles.btn}>test</Button>
          <Button className={styles.btn}>test</Button>
          <Button className={styles.btn}>test</Button>
          <Button className={styles.btn}>test</Button>
          <Button className={styles.btn}>test</Button>
        </div>
      </div>
    </div>
  );
};