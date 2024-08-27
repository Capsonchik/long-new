import styles from './styles.module.scss';
import {Header} from "../../components/header/Header.jsx";
import {Button, Table} from "rsuite";
import {useNavigate} from "react-router-dom";
import {FTestChart} from "../../components/charts/fTestChart.jsx";
import {useSelector} from "react-redux";
import {selectFtestData} from "../../store/fTestSlice/fTest.selectors.js";

const {Column, HeaderCell, Cell} = Table;

export const FtestPage = () => {
  const navigate = useNavigate();
  const fTestData = useSelector(selectFtestData);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header/>
        <Button className={styles.btn} onClick={() => navigate('/')}>Назад</Button>
      </div>
      <FTestChart/>
      <Table
        height={400}
        data={fTestData && fTestData.anova_model_summary}
        onRowClick={rowData => {
          console.log(rowData);
        }}
      >
        <Column width={200} align="center" fixed>
          <HeaderCell></HeaderCell>
          <Cell dataKey="name"/>
        </Column>

        <Column width={150}>
          <HeaderCell>sum_sq</HeaderCell>
          <Cell dataKey="sum_sq"/>
        </Column>

        <Column width={150}>
          <HeaderCell>df</HeaderCell>
          <Cell dataKey="df"/>
        </Column>

        <Column width={100}>
          <HeaderCell>F</HeaderCell>
          <Cell dataKey="f"/>
        </Column>

        <Column width={100}>
          <HeaderCell>PR(>F)</HeaderCell>
          <Cell dataKey="pr"/>
        </Column>

      </Table>
    </div>
  );
};