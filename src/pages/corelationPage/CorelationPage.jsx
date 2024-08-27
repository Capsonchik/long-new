import styles from './styles.module.scss';
import {Header} from "../../components/header/Header.jsx";
import {Button} from "rsuite";
import {useNavigate} from "react-router-dom";
import {CorelationChart} from "../../components/charts/corelationChart.jsx";
import {useSelector} from "react-redux";
import {selectCorelationData} from "../../store/corelationSlice/corelation.selectors.js";

export const CorelationPage = () => {
  const navigate = useNavigate();
  const corelationData = useSelector(selectCorelationData);

  return (
    <div className={styles.container}>
      <div>
        <Header/>
        <Button onClick={() => navigate('/')}>Назад</Button>
      </div>
      <CorelationChart/>
      <div className={styles.content}>
        <spna><strong>Statistic:</strong> {corelationData.statistic}</spna>
        <spna><strong>P-value:</strong> {corelationData.p_value}</spna>

      </div>
    </div>
  );
};