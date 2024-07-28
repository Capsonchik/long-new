import styles from './styles.module.scss'
import {Button, SelectPicker} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {addNewParamOption, setCulture, setLong, setSocio} from "../../store/mainSlice.js";
import {BLOCK_1_PARAMS} from "../../mocks/paramsMock.js";
import {selectAddNewParam} from "../../store/mainSelectors.js";
import {useState} from "react";


export const FirstParamBlock = () => {
  const dispatch = useDispatch();
  const data = BLOCK_1_PARAMS.map(item => ({label: item, value: item}));
  const isAddNewParam = useSelector(selectAddNewParam);
  const [current, setCurrent] = useState('')

  const handleSetNewParam = () => {
    dispatch(addNewParamOption(!isAddNewParam))
  }

  const handleSetValue = () => {
    if(current === 'long') {
      dispatch(setLong(false))
      dispatch(setSocio(true))
      dispatch(setCulture(true))
    } else if (current === 'socio') {
      dispatch(setLong(true))
      dispatch(setSocio(false))
      dispatch(setCulture(true))
    } else if (current === 'culture') {
      dispatch(setLong(true))
      dispatch(setSocio(true))
      dispatch(setCulture(false))
    }
  }

  return (
    <div className={styles.container}>
      <span>Выбор параметра 1</span>
      <Button color={'orange'} appearance={"primary"} onClick={handleSetNewParam} className={styles.btn}>
        {!isAddNewParam ? 'Открыть дополнительный параметр' : 'Скрыть параметр'}
      </Button>
      <Button color={'orange'} appearance={"primary"}  onClick={() => setCurrent('long')} className={styles.btn}>Лонгитюдные данные</Button>
      <Button color={'orange'} appearance={"primary"}  onClick={() => setCurrent('socio')} className={styles.btn}>Социальная</Button>
      <Button color={'orange'} appearance={"primary"}  onClick={() => setCurrent('culture')} className={styles.btn}>Культура и досуг</Button>
      <SelectPicker className={styles.picker} data={data} placeholder={'Параметр'}/>
      <Button
        onClick={handleSetValue}
        color={'orange'}
        appearance={"primary"}
        className={styles.btn}
      >
        Готово
      </Button>
    </div>
  );
};