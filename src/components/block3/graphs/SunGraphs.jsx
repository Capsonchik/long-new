import styles from './styles.module.scss';
import {Sunburst} from "../../charts/sunburst.jsx";
import {SunBurstNext} from "../../charts/sunBurstNext.jsx";
import {selectFirstQuestion, selectSecondQuestion} from "../../../store/questionSlice/questionDescription.selectors.js";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "rsuite";
import {clearFirstQuestion, clearSecondQuestion} from "../../../store/questionSlice/questionDesscription.slice.js";

export const SunGraphs = () => {
  const dispatch = useDispatch();
  const firstQuestion = useSelector(selectFirstQuestion);
  const secondQuestion = useSelector(selectSecondQuestion);

  const handleClearFirstResult = () => {
    dispatch(clearFirstQuestion())
  }

  const handleClearSecondResult = () => {
    dispatch(clearSecondQuestion())
  }

  return (
    <div className={styles.container}>

      {firstQuestion === null ? <Sunburst/> : (
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: "center"
        }}>
          <span><strong>Выбранный вопрос:</strong> {firstQuestion.name}</span>
          <Button style={{marginTop: '1rem'}} onClick={handleClearFirstResult}>Вернуться назад</Button>
        </div>
      )}

      {secondQuestion === null ? <SunBurstNext/> : (
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: "center"
        }}>
          <span><strong>Выбранный вопрос:</strong> {secondQuestion.name}</span>
          <Button style={{marginTop: '1rem'}} onClick={handleClearSecondResult}>Вернуться назад</Button>
        </div>
      )}

    </div>
  );
};