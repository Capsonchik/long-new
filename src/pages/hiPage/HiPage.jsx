import {Header} from "../../components/header/Header.jsx";
import {HiChart} from "../../components/charts/hiChart.jsx";
import {Button} from "rsuite";
import {useNavigate} from "react-router-dom";

export const HiPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Header/>
        <Button onClick={() => navigate('/')}>Назад</Button>
      </div>

      <span>hi page</span>
      <HiChart/>
    </div>
  );
};