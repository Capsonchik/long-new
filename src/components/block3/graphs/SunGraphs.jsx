import styles from './styles.module.scss';
import {Sunbirst} from "../../charts/sunbirst.jsx";

export const SunGraphs = () => {
  return (
    <div className={styles.container}>
      <Sunbirst/>
      <Sunbirst/>
    </div>
  );
};