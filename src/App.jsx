import './App.css'
import 'rsuite/dist/rsuite.min.css';
import styles from './styles.module.scss';
import {FirstParamBlock} from "./components/firstParamBlock/FirstParamBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {SecondParamBlock} from "./components/secondParamBlock/SecondParamBlock.jsx";
import {Header} from "./components/header/Header.jsx";
import {useEffect} from "react";
import {fetchGetFirstParams} from "./store/firstParamsSlice/firstParam.actions.js";
import {FilterDrawer} from "./components/drawers/filterDrawer/FilterDrower.jsx";
import {selectSwitchBtn} from "./store/mainSelectors.js";
import {SunGraphs} from "./components/block3/graphs/SunGraphs.jsx";
import {fetchGetDefaultSunBurst, fetchGetNextDefaultSunBurst} from "./store/sunBirstSlice/sunBurst.actions.js";
import {Panel} from "rsuite";
import {ControlPanel} from "./components/controlPanel/ControlPanel.jsx";
import {AnaliticDrawer} from "./components/drawers/analiticDrawer/AnaliticDrawer.jsx";
import {SpaceDrawer} from "./components/drawers/spaceDrawer/SpaceDrawer.jsx";
import {InfoDraver} from "./components/drawers/infoDrawer/InfoDraver.jsx";
import {ExternalDrawer} from "./components/drawers/externalDrawer/externalDrawer.jsx";
import {ReportDrawer} from "./components/drawers/reportDrawer/reportDrawer.jsx";
import {clearGraphData} from "./store/secondParamSlice/secondParam.slice.js";

export const App = () => {
  const dispatch = useDispatch();
  const btnStatus = useSelector(selectSwitchBtn);

  useEffect(() => {
    dispatch(fetchGetFirstParams())
    dispatch(fetchGetDefaultSunBurst())
    dispatch(fetchGetNextDefaultSunBurst())
    dispatch(clearGraphData())
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Header/>
      {/*<ExternalFactors/>*/}


      <div className={styles.topBlocks}>
        <Panel bordered className={styles.concatBlocks}>
          {/*<div className={styles.concatBlocks}>*/}
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

          {/*<div className={styles.concatBlocksTitle}>*/}
          {/*  <Button*/}
          {/*    className={styles.switcherBtn}*/}
          {/*    onClick={() => dispatch(setSwitchBtn(!btnStatus))}*/}
          {/*  >*/}
          {/*    {btnStatus ? 'Выбор параметров через фильтры' : 'Выбор параметров в Лонгитюдном круге'}*/}
          {/*  </Button>*/}
          {/*</div>*/}
          {/*<div className={styles.concatBot}>*/}
          {/*<ExternalFactors/>*/}
          {/*</div>*/}
          {/*</div>*/}
        </Panel>

      </div>
      <ControlPanel/>
      {/*<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>*/}
      {/*  <Button*/}
      {/*    style={{width: 500, marginTop: '1rem'}}*/}
      {/*    color="orange"*/}
      {/*    appearance="primary"*/}
      {/*    onClick={() => dispatch(setSwitchBtn(!btnStatus))}*/}
      {/*  >*/}
      {/*    {!btnStatus ? 'Фильтры' : 'Круг'}*/}
      {/*  </Button>*/}
      {/*</div>*/}
      <FilterDrawer/>
      <AnaliticDrawer/>
      <SpaceDrawer/>
      <InfoDraver/>
      <ExternalDrawer/>
      <ReportDrawer/>
    </div>
  )
}

export default App;
