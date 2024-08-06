import './App.css'
import 'rsuite/dist/rsuite.min.css';
import styles from './styles.module.scss';
import {FirstParamBlock} from "./components/firstParamBlock/FirstParamBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectAddNewParam} from "./store/mainSelectors.js";
import {SecondParamBlock} from "./components/secondParamBlock/SecondParamBlock.jsx";
import {ExternalFactors} from "./components/externalFactors/ExternalFactors.jsx";
import {Header} from "./components/header/Header.jsx";
import {useEffect} from "react";
import {fetchGetFirstParams} from "./store/firstParamsSlice/firstParam.actions.js";
import {selectIsFirstParamDone} from "./store/firstParamsSlice/firstParam.selectors.js";
import {Block3Component} from "./components/block3/Block3Component.jsx";

export const App = () => {
  const isAddNewParam = useSelector(selectAddNewParam);
  const isFirstParamDone = useSelector(selectIsFirstParamDone);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetFirstParams())
  }, [dispatch]);

  const data = [
    'Eugenia',
    'Bryan',
    'Linda',
    'Nancy',
    'Lloyd',
    'Alice',
  ].map(item => ({label: item, value: item}));

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.topBlocks}>

        <div className={styles.concatBlocks}>
          <div className={styles.concatTop}>
            <div className={styles.block1}>
              <FirstParamBlock/>
            </div>
            <div className={styles.block2}>
              <SecondParamBlock/>
            </div>
          </div>
          <div className={styles.concatBlocksTitle}>
            <span style={{fontSize: 'x-large'}}>Выбор параметров в Лонгитюдном круге</span>
          </div>
          <div className={styles.concatBot}>
            <ExternalFactors/>
          </div>
        </div>
        <div className={styles.block3}>
          <Block3Component/>
        </div>
      </div>
    </div>
  )
}

export default App;
