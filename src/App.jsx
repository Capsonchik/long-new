import './App.css'
import 'rsuite/dist/rsuite.min.css';
import styles from './styles.module.scss';
import {FirstParamBlock} from "./components/firstParamBlock/FirstParamBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {SecondParamBlock} from "./components/secondParamBlock/SecondParamBlock.jsx";
import {ExternalFactors} from "./components/externalFactors/ExternalFactors.jsx";
import {Header} from "./components/header/Header.jsx";
import {useEffect} from "react";
import {fetchGetFirstParams} from "./store/firstParamsSlice/firstParam.actions.js";
import {FilterDrawer} from "./components/drawers/filterDrawer/FilterDrower.jsx";
import {Button} from "rsuite";
import {selectSwitchBtn} from "./store/mainSelectors.js";
import {setSwitchBtn} from "./store/mainSlice.js";
import {SunGraphs} from "./components/block3/graphs/SunGraphs.jsx";
import {fetchGetDefaultSunBurst, fetchGetNextDefaultSunBurst} from "./store/sunBirstSlice/sunBurst.actions.js";

export const App = () => {
  const dispatch = useDispatch();
  const btnStatus = useSelector(selectSwitchBtn);

  useEffect(() => {
    dispatch(fetchGetFirstParams())
    dispatch(fetchGetDefaultSunBurst())
    dispatch(fetchGetNextDefaultSunBurst())
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.topBlocks}>

        <div className={styles.concatBlocks}>
          {!btnStatus ? <SunGraphs/> : (
            <div className={styles.concatTop}>
              <div className={styles.block1}>
                <FirstParamBlock/>
              </div>
              <div className={styles.block2}>
                <SecondParamBlock/>
              </div>
            </div>
          )}

          <div className={styles.concatBlocksTitle}>
            <Button
              className={styles.switcherBtn}
              onClick={() => dispatch(setSwitchBtn(!btnStatus))}
            >
              {btnStatus ? 'Выбор параметров через фильтры' : 'Выбор параметров в Лонгитюдном круге'}
            </Button>
          </div>
          <div className={styles.concatBot}>
            <ExternalFactors/>
          </div>
        </div>
      </div>
      <FilterDrawer/>
    </div>
  )
}

export default App;
