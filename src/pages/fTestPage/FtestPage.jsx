import {Header} from "../../components/header/Header.jsx";
import {Button} from "rsuite";
import {useNavigate} from "react-router-dom";
import {FTestChart} from "../../components/charts/fTestChart.jsx";

export const FtestPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Header/>
        <Button onClick={() => navigate('/')}>Назад</Button>
      </div>
      F Test
      <FTestChart/>
    </div>
  );
};