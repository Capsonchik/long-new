import styles from './styles.module.scss';
import {setInfoDrawer} from "../../../store/drawerSlice/drawer.slice.js";
import {Button, Drawer, Panel} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectInfoDrawer} from "../../../store/drawerSlice/drawer.selectors.js";
import {selectNews} from "../../../store/newsSlice/news.selectors.js";
import {NewsComponent} from "../../newsComponent/NewsComponent.jsx";

export const InfoDraver = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectInfoDrawer);
  const news = useSelector(selectNews);

  return (
    <Drawer open={status} onClose={() => dispatch(setInfoDrawer(false))}>
      <Drawer.Body style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span>Инфо поле</span>
        <Panel style={{overflow: 'none'}} bordered>
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
        {/*<RadioTileGroup defaultValue="private" aria-label="Visibility Level">*/}
        {/*  <RadioTile icon={<Icon as={SentToUserIcon}/>} label="Новости" value="private">*/}
        {/*    Какое то описание для данного выбора*/}
        {/*  </RadioTile>*/}
        {/*  <RadioTile icon={<Icon as={SpeakerIcon}/>} label="События" value="internal">*/}
        {/*    Какое то описание для данного выбора*/}
        {/*  </RadioTile>*/}
        {/*</RadioTileGroup>*/}
        <div>
          {news ? news.map(news => <NewsComponent key={news.article_id} news={news}/>) : 'Новости еще не загрузились'}
        </div>
      </Drawer.Body>
    </Drawer>
  );
};