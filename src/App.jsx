import './App.css'
import 'rsuite/dist/rsuite.min.css';
import styles from './styles.module.scss';
import {PieChart} from "./components/pieChart/PieChart.jsx";
import {Button, CheckPicker} from "rsuite";
import {FirstParamBlock} from "./components/firstParamBlock/FirstParamBlock.jsx";
import {Period} from "./components/block3/period/Period.jsx";
import {Space} from "./components/block3/space/Space.jsx";
import {useSelector} from "react-redux";
import {selectAddNewParam} from "./store/mainSelectors.js";
import {SecondParamBlock} from "./components/secondParamBlock/SecondParamBlock.jsx";
import {ExternalFactors} from "./components/externalFactors/ExternalFactors.jsx";

function App() {
  const isAddNewParam = useSelector(selectAddNewParam);

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
      <h1 className={styles.header}>ЛОНГИТЮДНАЯ СИСТЕМА РОМИР</h1>
      <div className={styles.topBlocks}>

        <div className={styles.concatBlocks}>
          <div className={styles.concatTop}>
            <div className={styles.block1}>
              <FirstParamBlock/>
            </div>
            <div className={styles.block2}>
              {isAddNewParam
                ? <SecondParamBlock/>
                : (
                  <>
                    <div>
                      <PieChart/>
                    </div>
                    <div className={styles.blockPicker}>
                      <CheckPicker data={data} style={{width: 224}} placeholder={'Выберите дату'}/>
                    </div>
                  </>
                )
              }
            </div>
          </div>
          <div className={styles.concatBot}>
            <ExternalFactors/>
          </div>

        </div>
        <div className={styles.block3}>
          <div className={styles.block3Filters}>
            <div className={styles.block3Left}>
              <Period/>
            </div>
            <div className={styles.block3Right}>
              <Space/>
            </div>
          </div>
          <div className={styles.block3Filters}>
            <Button className={styles.btn}>График</Button>
            <Button className={styles.btn}>Exel таблица</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
