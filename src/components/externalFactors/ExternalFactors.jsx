import styles from './styles.module.scss';
import {Button} from "rsuite";
import {useSelector} from "react-redux";
import {selectCulture, selectLong, selectSocio} from "../../store/mainSelectors.js";
import {useNavigate} from "react-router-dom";
import {selectDataLoader} from "../../store/firstParamsSlice/firstParam.selectors.js";
import {selectIsSecondParamDone} from "../../store/secondParamSlice/secondParamSelectors.js";

export const ExternalFactors = () => {
  const long = useSelector(selectLong);
  const socio = useSelector(selectSocio);
  const culture = useSelector(selectCulture);
  const dataLoader = useSelector(selectDataLoader);
  const isSecondParamDone = useSelector(selectIsSecondParamDone);

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/data')
  }

  return (
    <div className={styles.externalContainer}>
      <div className={styles.factors}>
        <span>Внешние факторы</span>
        <div className={styles.factorsContent}>
          <Button onClick={handleNavigate} loading={dataLoader} disabled={!isSecondParamDone} color="orange"
                  appearance="primary"
                  className={styles.btn}>Данные</Button>
          <Button onClick={handleNavigate} disabled={socio} color="orange" appearance="primary"
                  className={styles.btn}>Хи-квадрат</Button>
          <Button onClick={handleNavigate} disabled={culture} color="orange" appearance="primary"
                  className={styles.btn}>Ф-тест</Button>
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