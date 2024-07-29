import styles from './styles.module.scss'
import {Button, SelectPicker} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {addNewParamOption, setCulture, setLong, setSocio} from "../../store/mainSlice.js";
import {BLOCK_1_PARAMS} from "../../mocks/paramsMock.js";
import {selectAddNewParam} from "../../store/mainSelectors.js";
import {useState} from "react";
import bigData from '../../mocks/full_level_new2607.json';
import {setFirstParamCategory, setFirstParamCategoryData} from "../../store/firstParamsSlice/firstParam.slice.js";
import {selectFirstParamCategoryData} from "../../store/firstParamsSlice/firstParam.selectors.js";


export const FirstParamBlock = () => {
  const dispatch = useDispatch();
  const data = BLOCK_1_PARAMS.map(item => ({label: item, value: item}));
  const isAddNewParam = useSelector(selectAddNewParam);
  const paramsData = useSelector(selectFirstParamCategoryData);
  const [current, setCurrent] = useState('')

  const firstParamCategory = bigData.map((item) => ({label: item.title, value: item.title}));
  const firstParamCategoryData = paramsData && paramsData.map((item) => ({label: item.name, value: item.name}));

  const handleSetNewParam = () => {
    dispatch(addNewParamOption(!isAddNewParam))
  }

  const filterCurrentCategory = (value) => {
    bigData.map((item) => {
      if (item.title === value) {
        dispatch(setFirstParamCategoryData(item.categories));
        return item.categories;
      }
    })
  }

  const handleCategorySave = (value) => {
    dispatch(setFirstParamCategory(value))
    filterCurrentCategory(value)
  }

  const handleSetValue = () => {
    if (current === 'long') {
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
      <SelectPicker
        className={styles.picker}
        data={firstParamCategory}
        placeholder={'Категория'}
        onChange={handleCategorySave}
      />
      <SelectPicker
        className={styles.picker}
        data={firstParamCategoryData}
        placeholder={'Категория'}
        onChange={handleCategorySave}
      />
      {/*<Button color={'orange'} appearance={"primary"} onClick={() => setCurrent('long')} className={styles.btn}>Лонгитюдные*/}
      {/*  данные</Button>*/}
      {/*<Button color={'orange'} appearance={"primary"} onClick={() => setCurrent('socio')}*/}
      {/*        className={styles.btn}>Социальная</Button>*/}
      <Button color={'orange'} appearance={"primary"} onClick={() => setCurrent('culture')} className={styles.btn}>Культура
        и досуг</Button>
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