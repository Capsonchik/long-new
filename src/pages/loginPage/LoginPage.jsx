import styles from './styles.module.scss';
import {LoginComponent} from "../../components/loginComponent/LoginComponent.jsx";

export const LoginPage = () => {
  return (
    <div className={styles.mainContainer}>
      <LoginComponent/>
    </div>
  );
};