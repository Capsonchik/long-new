import styles from './styles.module.scss';
import {Header} from "../../components/header/Header.jsx";
import {Button, CheckPicker} from "rsuite";
import {FaChartBar, FaChartLine} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentGraph} from "../../store/mainSlice.js";
import {BarChart} from "../../components/charts/barChart.jsx";
import {selectCurrentGraph} from "../../store/mainSelectors.js";
import {LineChart} from "../../components/charts/lineChart.jsx";
import {
  selectAnswers,
  selectAnswerTitle,
  selectDataToSend,
} from "../../store/firstParamsSlice/firstParam.selectors.js";
import {setAnsw1, setAnsw2} from "../../store/firstParamsSlice/firstParam.slice.js";
import {fetchPostGraphData} from "../../store/firstParamsSlice/firstParam.actions.js";
import {selectNextAnswers, selectNextAnswerTitle} from "../../store/secondParamSlice/secondParamSelectors.js";

export const DataPage = () => {
  const dispatch = useDispatch();
  const currentGraph = useSelector(selectCurrentGraph);
  const answers = useSelector(selectAnswers);
  const answerTitle = useSelector(selectAnswerTitle);
  const dataToSend = useSelector(selectDataToSend);
  const nextAnswerTitle = useSelector(selectNextAnswerTitle);
  const nextAnswers = useSelector(selectNextAnswers);

  const answersData = answers && answers.map(
    item => ({label: item.response, value: item.response}),
  )

  const nextAnswersData = nextAnswers && nextAnswers.map(
    item => ({label: item.response, value: item.response}),
  )

  const handleAddValue = (value) => {
    // dispatch(setBlockAnswers(value))
    console.log(value)
    dispatch(setAnsw1(value))
  }

  const handleAddNextValue = (value) => {
    dispatch(setAnsw2(value))
  }

  const handleSendAnswer = () => {
    if (dataToSend) {
      dispatch(fetchPostGraphData(dataToSend))
      console.log(dataToSend)
    }
  }

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.params}>
        <div className={styles.paramsBlock}>
          <span className={styles.paramsBlockTitle}>Настройка параметров</span>
          <span>{answerTitle ? answerTitle : 'Сперва нужно выбрать вопрос'}</span>
          <CheckPicker data={answersData} onChange={handleAddValue} placeholder={'Варианты ответа'}/>
          <span>{nextAnswerTitle ? nextAnswerTitle : 'Ошибка обработки запроса'}</span>
          <CheckPicker data={nextAnswersData} onChange={handleAddNextValue} placeholder={'Варианты ответа'}/>
          <Button onClick={handleSendAnswer}>Подтвердить</Button>
          <span className={styles.paramsBlockGraph}>График для вывода</span>
          <div className={styles.btnsGroop}>
            <Button onClick={() => dispatch(setCurrentGraph('line'))} className={styles.btn}>
              <FaChartLine style={{fontSize: 40, cursor: 'pointer'}}/>
            </Button>
            <Button onClick={() => dispatch(setCurrentGraph('bar'))} className={styles.btn}>
              <FaChartBar style={{fontSize: 40, cursor: 'pointer'}}/>
            </Button>
          </div>
        </div>
        <div className={styles.graphBlock}>
          <div>
            {currentGraph === 'bar' ? <BarChart/> : <LineChart/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage;