import styles from './styles.module.scss';
import {Sunburst} from "../../charts/sunburst.jsx";
import {SunBurstNext} from "../../charts/sunBurstNext.jsx";

export const SunGraphs = () => {
  return (
    <div className={styles.container}>
      <Sunburst/>
      <SunBurstNext/>
    </div>
  );
};