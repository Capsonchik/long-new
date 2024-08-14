import styles from './styles.module.scss';
import {Button} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectCulture, selectLong, selectSocio} from "../../store/mainSelectors.js";
import {useNavigate} from "react-router-dom";
import {selectDataLoader, selectFirstScaleType} from "../../store/firstParamsSlice/firstParam.selectors.js";
import {selectIsSecondParamDone, selectSecondScaleType} from "../../store/secondParamSlice/secondParamSelectors.js";
import {setFilterDrawerStatus} from "../../store/mainSlice.js";

export const ExternalFactors = () => {
  const dispatch = useDispatch();
  const long = useSelector(selectLong);
  const socio = useSelector(selectSocio);
  const culture = useSelector(selectCulture);
  const dataLoader = useSelector(selectDataLoader);
  const isSecondParamDone = useSelector(selectIsSecondParamDone);
  const firstScaleType = useSelector(selectFirstScaleType);
  const secondScaleType = useSelector(selectSecondScaleType);


  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/data')
  }

  const isButtonEnabled = (firstScaleType, secondScaleType) => {
    return (
      (firstScaleType === 'категориальная' || firstScaleType === 'иерархичная') &&
      (secondScaleType === 'категориальная' || secondScaleType === 'иерархичная')
    );
  };

  return (
    <div className={styles.externalContainer}>
      <div className={styles.factors}>
        <span>Витрина аналитики</span>
        <div className={styles.factorsContent}>
          <Button onClick={handleNavigate} loading={dataLoader} disabled={!isSecondParamDone} color="orange"
                  appearance="primary"
                  className={styles.btn}>Данные</Button>
          <Button
            onClick={handleNavigate}
            disabled={!(
              (firstScaleType === 'категориальная' || firstScaleType === 'иерархичная') &&
              (secondScaleType === 'категориальная' || secondScaleType === 'иерархичная')
            )}
            color="orange"
            appearance="primary"
            className={styles.btn}
          >
            Хи-квадрат
          </Button>
          <Button
            onClick={handleNavigate}
            disabled={!(firstScaleType === 'метрическая' && secondScaleType === 'метрическая')}
            color="orange"
            appearance="primary"
            className={styles.btn}
          >
            Корреляция
          </Button>
          <Button
            onClick={handleNavigate}
            disabled={!(
              (firstScaleType === 'метрическая' || firstScaleType === 'иерархичная') &&
              (secondScaleType === 'категориальная' || secondScaleType === 'номинальная')
            )}
            color="orange"
            appearance="primary"
            className={styles.btn}
          >
            Ф-тест Фишера
          </Button>
          <Button onClick={() => dispatch(setFilterDrawerStatus(true))} color="orange" appearance="primary"
                  className={styles.btn}>Панель фильтров</Button>
        </div>
      </div>
    </div>
  );
};