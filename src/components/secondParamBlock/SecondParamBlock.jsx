import styles from './styles.module.scss';
import {SelectPicker} from "rsuite";
import {BLOCK_1_PARAMS} from "../../mocks/paramsMock.js";


export const SecondParamBlock = () => {

  const data = BLOCK_1_PARAMS.map(item => ({label: item, value: item}));

  return (
    <div className={styles.container}>
      <span className={styles.topBtn}>Выбор параметра 2</span>
      <SelectPicker className={styles.picker} data={data} placeholder={'Сегмент'}/>
      <SelectPicker className={styles.picker} data={data} placeholder={'Категория'}/>
      <SelectPicker className={styles.picker} data={data} placeholder={'Подкатегория'}/>
      <SelectPicker className={styles.picker} data={data} placeholder={'Группа параметров'}/>
      <SelectPicker className={styles.picker} data={data} placeholder={'Параметр'}/>
    </div>
  );
};