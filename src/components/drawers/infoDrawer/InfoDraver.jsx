import styles from './styles.module.scss';
import {setInfoDrawer} from "../../../store/drawerSlice/drawer.slice.js";
import {Button, Drawer, Panel} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectInfoDrawer} from "../../../store/drawerSlice/drawer.selectors.js";

export const InfoDraver = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectInfoDrawer);

  return (
    <Drawer open={status} onClose={() => dispatch(setInfoDrawer(false))}>
      <Drawer.Body style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span>Инфо поле</span>
        <Panel bordered>
          <div className={styles.content}>
            <Button
              className={styles.btn}
              color="orange"
              appearance="primary"
            >
              Новости
            </Button>
            <Button
              className={styles.btn}
              color="orange"
              appearance="primary"
            >
              События
            </Button>
          </div>
        </Panel>
      </Drawer.Body>
    </Drawer>
  );
};