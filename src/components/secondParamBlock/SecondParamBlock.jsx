import styles from './styles.module.scss';
import {Button, SelectPicker} from "rsuite";
import {BLOCK_1_PARAMS} from "../../mocks/paramsMock.js";

export const SecondParamBlock = () => {
  const data = BLOCK_1_PARAMS.map(item => ({label: item, value: item}));

  return (
    <div className={styles.container}>
      <Button className={styles.topBtn}>Лонгитюдные данные</Button>
      <Button className={styles.btn}>Социальная</Button>
      <Button className={styles.btn}>Культура и досуг</Button>
      <SelectPicker className={styles.picker} data={data} placeholder={'Параметр'}/>
      <Button className={styles.btn}>Готово</Button>
    </div>
  );
};