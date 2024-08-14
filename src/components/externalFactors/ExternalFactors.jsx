import styles from './styles.module.scss';
import {Button} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
  selectDataLoader,
  selectFifthParamBlockId,
  selectFirstScaleType
} from "../../store/firstParamsSlice/firstParam.selectors.js";
import {
  selectIsSecondParamDone,
  selectNextFifthParamBlockId,
  selectSecondScaleType
} from "../../store/secondParamSlice/secondParamSelectors.js";
import {setFilterDrawerStatus} from "../../store/mainSlice.js";
import {selectHiLoader} from "../../store/hiSlice/hi.selectors.js";
import {useEffect} from "react";
import {fetchGetHiData} from "../../store/hiSlice/hi.actions.js";

export const ExternalFactors = () => {
  const dispatch = useDispatch();
  const dataLoader = useSelector(selectDataLoader);
  const isSecondParamDone = useSelector(selectIsSecondParamDone);
  const firstScaleType = useSelector(selectFirstScaleType);
  const secondScaleType = useSelector(selectSecondScaleType);
  const hiLoader = useSelector(selectHiLoader);
  const firstParam = useSelector(selectFifthParamBlockId)
  const secondParam = useSelector(selectNextFifthParamBlockId)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/data')
  }

  useEffect(() => {
    if (
      (firstScaleType === 'категориальная' || firstScaleType === 'иерархическая') &&
      (secondScaleType === 'категориальная' || secondScaleType === 'иерархическая')) {
      dispatch(fetchGetHiData({parameter1: firstParam, parameter2: secondParam}))
      console.log('firstParam', firstParam)
      console.log('secondParam', secondParam)
    }
  }, [dispatch, firstScaleType, secondScaleType]);

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
              (firstScaleType === 'категориальная' || firstScaleType === 'иерархическая') &&
              (secondScaleType === 'категориальная' || secondScaleType === 'иерархическая')
            )}
            color="orange"
            appearance="primary"
            className={styles.btn}
            loading={hiLoader}
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
              (firstScaleType === 'метрическая' || firstScaleType === 'иерархическая') &&
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