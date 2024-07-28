import styles from './styles.module.scss';
import {Button, SelectPicker} from "rsuite";
import {BLOCK_1_PARAMS} from "../../mocks/paramsMock.js";
import {useDispatch} from "react-redux";
import {setSecondParams} from "../../store/mainSlice.js";

export const SecondParamBlock = () => {
  const dispatch = useDispatch();
  const data = BLOCK_1_PARAMS.map(item => ({label: item, value: item}));

  return (
    <div className={styles.container}>
      <span className={styles.topBtn}>Выбор параметра 2</span>
      <Button appearance={'primary'} color={'orange'} className={styles.btn}>Лонгитюдные данные</Button>
      <Button appearance={'primary'} color={'orange'} className={styles.btn}>Социальная</Button>
      <Button appearance={'primary'} color={'orange'} className={styles.btn}>Культура и досуг</Button>
      <SelectPicker className={styles.picker} data={data} placeholder={'Параметр'}/>
      <Button onClick={() => dispatch(setSecondParams(true))} appearance={'primary'} color={'orange'} className={styles.btn}>Готово</Button>
    </div>
  );
};