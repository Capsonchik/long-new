import styles from './styles.module.scss';
import {Header} from "../../components/header/Header.jsx";
import {HiChart} from "../../components/charts/hiChart.jsx";
import {Button} from "rsuite";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectHiData} from "../../store/hiSlice/hi.selectors.js";

export const HiPage = () => {
  const navigate = useNavigate();
  const hiData = useSelector(selectHiData);

  console.log(hiData)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header/>
        <Button onClick={() => navigate('/')}>Назад</Button>
      </div>
      <HiChart/>
      <div className={styles.data}>
        <span><strong>х&#x00B2;:</strong> {hiData && hiData.chi2}</span>
        <span><strong>P:</strong> {hiData && hiData.p}</span>
        <span><strong>Dof:</strong> {hiData && hiData.dof}</span>
      </div>
    </div>
  );
};