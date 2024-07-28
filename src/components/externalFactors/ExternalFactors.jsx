import styles from './styles.module.scss';
import {Button} from "rsuite";
import {useSelector} from "react-redux";
import {selectCulture, selectLong, selectSocio} from "../../store/mainSelectors.js";

export const ExternalFactors = () => {
  const long = useSelector(selectLong);
  const socio = useSelector(selectSocio);
  const culture =  useSelector(selectCulture);

  return (
    <div className={styles.externalContainer}>
      <div className={styles.factors}>
        <span>Внешние факторы</span>
        <div className={styles.factorsContent}>
          <Button disabled={long} color="orange" appearance="primary" className={styles.btn}>Данные</Button>
          <Button disabled={socio} color="orange" appearance="primary" className={styles.btn}>Хи-квадрат</Button>
          <Button disabled={culture} color="orange" appearance="primary" className={styles.btn}>Ф-тест</Button>
        </div>
      </div>
      <div className={styles.factors}>
        <span>Внешние факторы</span>
        <div className={styles.factorsContent}>
          <Button disabled className={styles.btn}>test</Button>
          <Button disabled className={styles.btn}>test</Button>
          <Button disabled className={styles.btn}>test</Button>
          <Button disabled className={styles.btn}>test</Button>
          <Button disabled className={styles.btn}>test</Button>
        </div>
      </div>
    </div>
  );
};