import styles from './styles.module.scss';
import {Sunburst} from "../../charts/sunburst.jsx";

export const SunGraphs = () => {
  return (
    <div className={styles.container}>
      <Sunburst/>
      <Sunburst/>
    </div>
  );
};