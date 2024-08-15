import styles from './styles.module.scss';
import {setExternalDrawer} from "../../../store/drawerSlice/drawer.slice.js";
import {Button, Drawer, Panel} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectExternalDrawer} from "../../../store/drawerSlice/drawer.selectors.js";

export const ExternalDrawer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectExternalDrawer);

  return (
    <Drawer open={status} onClose={() => dispatch(setExternalDrawer(false))}>
      <Drawer.Body style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span>Внешние факторы</span>
        <Panel bordered>
          <div className={styles.content}>
            <Button
              className={styles.btn}
              color="orange"
              appearance="primary"
            >
              Природные
            </Button>
            <Button
              className={styles.btn}
              color="orange"
              appearance="primary"
            >
              Экономические
            </Button>
            <Button
              className={styles.btn}
              color="orange"
              appearance="primary"
            >
              Политические
            </Button>
            <Button
              className={styles.btn}
              color="orange"
              appearance="primary"
            >
              Социальные
            </Button>
          </div>
        </Panel>
      </Drawer.Body>
    </Drawer>
  );
};