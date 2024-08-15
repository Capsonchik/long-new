import styles from './styles.module.scss';
import {setInfoDrawer} from "../../../store/drawerSlice/drawer.slice.js";
import {Button, Drawer, Panel, RadioTile, RadioTileGroup} from "rsuite";
import {Icon} from '@rsuite/icons';
import SentToUserIcon from '@rsuite/icons/SentToUser';
import SpeakerIcon from '@rsuite/icons/Speaker';
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
        <RadioTileGroup defaultValue="private" aria-label="Visibility Level">
          <RadioTile icon={<Icon as={SentToUserIcon}/>} label="Новости" value="private">
            Какое то описание для данного выбора
          </RadioTile>
          <RadioTile icon={<Icon as={SpeakerIcon}/>} label="События" value="internal">
            Какое то описание для данного выбора
          </RadioTile>
        </RadioTileGroup>
      </Drawer.Body>
    </Drawer>
  );
};