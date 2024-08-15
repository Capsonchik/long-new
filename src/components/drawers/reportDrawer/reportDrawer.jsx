import styles from './styles.module.scss';
import {setReportDrawer} from "../../../store/drawerSlice/drawer.slice.js";
import {Button, Drawer, Panel} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectReportDrawer} from "../../../store/drawerSlice/drawer.selectors.js";

export const ReportDrawer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectReportDrawer);

  return (
    <Drawer open={status} onClose={() => dispatch(setReportDrawer(false))}>
      <Drawer.Body style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span>Отображение отчета</span>
        <Panel bordered>
          <div className={styles.content}>
            <Button
              className={styles.btn}
              color="orange"
              appearance="primary"
            >
              График
            </Button>
            <Button
              className={styles.btn}
              color="orange"
              appearance="primary"
            >
              Excel файл
            </Button>
          </div>
        </Panel>
      </Drawer.Body>
    </Drawer>
  );
};