import styles from './styles.module.scss';
import {Header} from "../../components/header/Header.jsx";
import {Button, SelectPicker} from "rsuite";
import { FaChartLine } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import {useDispatch} from "react-redux";
import {setCurrentGraph} from "../../store/mainSlice.js";

export const DataPage = () => {
  const dispatch = useDispatch()
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
      <div className={styles.params}>
        <div className={styles.paramsBlock}>
          <span className={styles.paramsBlockTitle}>Настройка параметров</span>
          <SelectPicker data={data}/>
          <span className={styles.paramsBlockGraph}>График для вывода</span>
          <div className={styles.btnsGroop}>
            <Button onClick={() => dispatch(setCurrentGraph('line'))} className={styles.btn}>
              <FaChartLine  style={{fontSize: 40, cursor: 'pointer'}}/>
            </Button>
            <Button nClick={() => dispatch(setCurrentGraph('bar'))} className={styles.btn}>
              <FaChartBar style={{fontSize: 40, cursor: 'pointer'}}/>
            </Button>

          </div>
        </div>
        <div className={styles.graphBlock}>
          test
        </div>
      </div>
    </div>
  );
};

export default DataPage;