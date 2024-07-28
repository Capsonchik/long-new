import styles from './styles.module.scss';
import {Button} from "rsuite";
import {useLocation, useNavigate} from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>ЛОНГИТЮДНАЯ СИСТЕМА РОМИР</h1>
      {location.pathname === '/data' ? <Button onClick={() => navigate('/')} className={styles.btn}>Вернуться назад</Button> : null}
    </div>
  );
};