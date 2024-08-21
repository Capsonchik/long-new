import styles from './styles.module.scss'
import {Button, Panel} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {
  setAnaliticDrawer,
  setExternalDrawer,
  setInfoDrawer,
  setSpaceAndTimeDrawer
} from "../../store/drawerSlice/drawer.slice.js";
import {selectSwitchBtn} from "../../store/mainSelectors.js";
import {selectIsSecondParamDone} from "../../store/secondParamSlice/secondParamSelectors.js";
import {selectDataLoader} from "../../store/firstParamsSlice/firstParam.selectors.js";
import {setSwitchBtn} from "../../store/mainSlice.js";

export const ControlPanel = () => {
  const dispatch = useDispatch();
  const btnStatus = useSelector(selectSwitchBtn);
  const isSecondParamDone = useSelector(selectIsSecondParamDone);
  const dataLoader = useSelector(selectDataLoader);

  return (
    <Panel className={styles.panel} bordered header={'Панель управления'}>
      <div className={styles.content}>
        <Button
          onClick={() => dispatch(setAnaliticDrawer(true))}
          color="orange"
          appearance="primary"
          className={styles.btn}
          loading={dataLoader}
          disabled={!isSecondParamDone}
        >
          Аналитика
        </Button>
        <Button
          onClick={() => dispatch(setSpaceAndTimeDrawer(true))}
          color="orange"
          appearance="primary"
          className={styles.btn}
          disabled
        >
          Пространство и время
        </Button>
        <Button
          onClick={() => dispatch(setInfoDrawer(true))}
          color="orange"
          appearance="primary"
          className={styles.btn}
          disabled
        >
          Инфо поле
        </Button>
        <Button
          onClick={() => dispatch(setExternalDrawer(true))}
          color="orange"
          appearance="primary"
          className={styles.btn}
          disabled
        >
          Внешние факторы
        </Button>
        {/*<Button*/}
        {/*  onClick={() => dispatch(setReportDrawer(true))}*/}
        {/*  color="orange"*/}
        {/*  appearance="primary"*/}
        {/*  className={styles.btn}*/}
        {/*>*/}
        {/*  Отображение отчета*/}
        {/*</Button>*/}
        <Button
          className={styles.btn}
          color="orange"
          appearance="primary"
          onClick={() => dispatch(setSwitchBtn(!btnStatus))}
        >
          {btnStatus ? 'Фильтры' : 'Круг'}
        </Button>
      </div>

    </Panel>
  );
};