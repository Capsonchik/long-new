import {Header} from "../../components/header/Header.jsx";
import {Button} from "rsuite";
import {useNavigate} from "react-router-dom";
import {CorelationChart} from "../../components/charts/corelationChart.jsx";

export const CorelationPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Header/>
        <Button onClick={() => navigate('/')}>Назад</Button>
      </div>
      Corelation Page
      <CorelationChart/>
    </div>
  );
};