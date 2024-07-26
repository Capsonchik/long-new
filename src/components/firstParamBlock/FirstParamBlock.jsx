import styles from './styles.module.scss'
import {Button, SelectPicker} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {addNewParamOption} from "../../store/mainSlice.js";
import {BLOCK_1_PARAMS} from "../../mocks/paramsMock.js";
import {selectAddNewParam} from "../../store/mainSelectors.js";


export const FirstParamBlock = () => {
  const dispatch = useDispatch();
  const data = BLOCK_1_PARAMS.map(item => ({label: item, value: item}));
  const isAddNewParam = useSelector(selectAddNewParam);

  const handleSetNewParam = () => {
    dispatch(addNewParamOption(!isAddNewParam))
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleSetNewParam} className={styles.btn}>
        {!isAddNewParam ? 'Открыть дополнительный параметр' : 'Скрыть параметр'}
      </Button>
      <Button className={styles.btn}>Лонгитюдные данные</Button>
      <Button className={styles.btn}>Социальная</Button>
      <Button className={styles.btn}>Культура и досуг</Button>
      <SelectPicker className={styles.picker} data={data} placeholder={'Параметр'}/>
      <Button className={styles.btn}>Готово</Button>
    </div>
  );
};