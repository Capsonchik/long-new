import styles from './styles.module.scss';
import {Header} from "../../components/header/Header.jsx";
import {Button, CheckPicker, SelectPicker} from "rsuite";
import {FaChartBar, FaChartLine} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentGraph} from "../../store/mainSlice.js";
import {BarChart} from "../../components/charts/barChart.jsx";
import {selectCurrentGraph, selectSecondParam} from "../../store/mainSelectors.js";
import {LineChart} from "../../components/charts/lineChart.jsx";
import {selectAnswers, selectAnswerTitle, selectDataToSend} from "../../store/firstParamsSlice/firstParam.selectors.js";
import {useEffect, useState} from "react";
import {setBlockAnswers} from "../../store/firstParamsSlice/firstParam.slice.js";
import {fetchPostGraphData} from "../../store/firstParamsSlice/firstParam.actions.js";

export const DataPage = () => {
  const dispatch = useDispatch();
  const secondParam = useSelector(selectSecondParam);
  const currentGraph = useSelector(selectCurrentGraph);
  const answers = useSelector(selectAnswers);
  const answerTitle = useSelector(selectAnswerTitle);
  const dataToSend = useSelector(selectDataToSend);

  const [currentAnswer, setCurrentAnswer] = useState([])

  const answersData = answers && answers.map(
    item => ({label: item.response, value: item.response}),
  )

  const data = [
    'Eugenia',
    'Bryan',
    'Linda',
    'Nancy',
    'Lloyd',
    'Alice',
  ].map(item => ({label: item, value: item}));

  const handleAddValue = (value) => {
    setCurrentAnswer(value)
    dispatch(setBlockAnswers(value))
  }

  useEffect(() => {
    console.log(currentAnswer)
  }, [currentAnswer]);

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
          <Button onClick={handleSendAnswer}>Подтвердить</Button>
          <SelectPicker data={data} placeholder={'Параметр 1'}/>
          {secondParam ? (
            <div className={styles.secondParam}>
              <SelectPicker style={{width: '100%'}} data={data} placeholder={'Параметр 2'}/>
            </div>
          ) : null}
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
          <div>
            {currentGraph === 'bar' ? <BarChart/> : <LineChart/>}
          </div>
          <div>
            {currentGraph === 'bar' ? <BarChart/> : <LineChart/>}
          </div>
          <div>
            {currentGraph === 'bar' ? <BarChart/> : <LineChart/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage;