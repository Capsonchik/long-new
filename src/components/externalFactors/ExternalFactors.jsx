import styles from './styles.module.scss';
import {Button, Panel} from "rsuite";
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
import {selectHiLoader} from "../../store/hiSlice/hi.selectors.js";
import {useEffect} from "react";
import {fetchGetHiData} from "../../store/hiSlice/hi.actions.js";
import {fetchGetCorelationData} from "../../store/corelationSlice/corelation.actions.js";
import {selectCorelationLoader} from "../../store/corelationSlice/corelation.selectors.js";
import {fetchGetFtestData} from "../../store/fTestSlice/fTest.actions.js";
import {selectSwitchBtn} from "../../store/mainSelectors.js";
import {selectFtestLoader} from "../../store/fTestSlice/fTest.selectors.js";

export const ExternalFactors = () => {
  const dispatch = useDispatch();
  const dataLoader = useSelector(selectDataLoader);
  const isSecondParamDone = useSelector(selectIsSecondParamDone);
  const firstScaleType = useSelector(selectFirstScaleType);
  const secondScaleType = useSelector(selectSecondScaleType);
  const hiLoader = useSelector(selectHiLoader);
  const corelationLoader = useSelector(selectCorelationLoader);
  const ftestLoader = useSelector(selectFtestLoader);
  const firstParam = useSelector(selectFifthParamBlockId);
  const secondParam = useSelector(selectNextFifthParamBlockId);
  const btnStatus = useSelector(selectSwitchBtn);

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/data')
  }

  const hiNavigate = () => {
    navigate('/hipage')
  }

  useEffect(() => {
    if (
      (firstScaleType === 'категориальная' || firstScaleType === 'иерархическая') &&
      (secondScaleType === 'категориальная' || secondScaleType === 'иерархическая')
    ) {
      dispatch(fetchGetHiData({parameter1: firstParam, parameter2: secondParam}));
    }

    if (firstScaleType === 'метрическая' && secondScaleType === 'метрическая') {
      dispatch(fetchGetCorelationData({parameter1: firstParam, parameter2: secondParam}));
    }

    if (
      (firstScaleType === 'метрическая' || firstScaleType === 'иерархическая') &&
      (secondScaleType === 'категориальная' || secondScaleType === 'номинальная')
    ) {
      dispatch(fetchGetFtestData({parameter1: firstParam, parameter2: secondParam}));
    }
  }, [dispatch, firstScaleType, secondScaleType]);

  return (
    <Panel bordered>
      <div className={styles.externalContainer}>
        <div className={styles.factors}>
          {/*<span>Витрина аналитики</span>*/}
          <div className={styles.factorsContent}>
            <Button onClick={handleNavigate} loading={dataLoader} disabled={!isSecondParamDone} color="orange"
                    appearance="primary"
                    className={styles.btn}>Данные</Button>
            <Button
              onClick={hiNavigate}
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
              loading={corelationLoader}
            >
              Корреляция
            </Button>
            <Button
              onClick={() => navigate('/ftest')}
              disabled={!(
                (firstScaleType === 'метрическая' || firstScaleType === 'иерархическая') &&
                (secondScaleType === 'категориальная' || secondScaleType === 'номинальная')
              )}
              color="orange"
              appearance="primary"
              className={styles.btn}
              loading={ftestLoader}
            >
              Ф-тест Фишера
            </Button>
            {/*<Button onClick={() => dispatch(setFilterDrawerStatus(true))} color="orange" appearance="primary"*/}
            {/*        className={styles.btn}>Панель фильтров</Button>*/}
            {/*<Button*/}
            {/*  className={styles.btn}*/}
            {/*  color="orange"*/}
            {/*  appearance="primary"*/}
            {/*  onClick={() => dispatch(setSwitchBtn(!btnStatus))}*/}
            {/*>*/}
            {/*  {btnStatus ? 'Фильтры' : 'Круг'}*/}
            {/*</Button>*/}
          </div>
        </div>
      </div>
    </Panel>

  );
};