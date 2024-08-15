import styles from './styles.module.scss'
import {Button, Panel} from "rsuite";
import {useDispatch} from "react-redux";
import {
  setAnaliticDrawer,
  setExternalDrawer,
  setInfoDrawer,
  setReportDrawer,
  setSpaceAndTimeDrawer
} from "../../store/drawerSlice/drawer.slice.js";

export const ControlPanel = () => {
  const dispatch = useDispatch();
  return (
    <Panel className={styles.panel} bordered header={'Панель управления'}>
      <div className={styles.content}>
        <Button
          onClick={() => dispatch(setAnaliticDrawer(true))}
          color="orange"
          appearance="primary"
          className={styles.btn}
        >
          Аналитика
        </Button>
        <Button
          onClick={() => dispatch(setSpaceAndTimeDrawer(true))}
          color="orange"
          appearance="primary"
          className={styles.btn}
        >
          Пространство и время
        </Button>
        <Button
          onClick={() => dispatch(setInfoDrawer(true))}
          color="orange"
          appearance="primary"
          className={styles.btn}
        >
          Инфо поле
        </Button>
        <Button
          onClick={() => dispatch(setExternalDrawer(true))}
          color="orange"
          appearance="primary"
          className={styles.btn}
        >
          Внешние факторы
        </Button>
        <Button
          onClick={() => dispatch(setReportDrawer(true))}
          color="orange"
          appearance="primary"
          className={styles.btn}
        >
          Отображение отчета
        </Button>
      </div>

    </Panel>
  );
};