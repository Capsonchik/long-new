import styles from './styles.module.scss'
import {SelectPicker} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {setLong} from "../../store/mainSlice.js";
import {
  setAnswerTitle,
  setFifthBlockParamBlockCategoryId,
  setFifthBlockParamBlockId,
  setFifthBlockParamScaleType,
  setFirstBlockParamBlockId,
  setFirstBlockParamCategoryId,
  setForthBlockParamBlockCategoryId,
  setForthBlockParamBlockId,
  setIsFirstParamDone,
  setQuestion1,
  setSecondBlockParamBlockCategoryId,
  setSecondBlockParamBlockId,
  setThirdBlockParamBlockCategoryId,
  setThirdBlockParamBlockId,
} from "../../store/firstParamsSlice/firstParam.slice.js";
import {
  selectFifthParam,
  selectFirstParam,
  selectForthParam,
  selectSecondParam,
  selectThirdBlock
} from "../../store/firstParamsSlice/firstParam.selectors.js";
import {
  fetchGetAnswers,
  fetchGetFifthParams,
  fetchGetForthParams,
  fetchGetSecondParams,
  fetchGetThirdParams
} from "../../store/firstParamsSlice/firstParam.actions.js";
import {fetchGetNextFirstParams} from "../../store/secondParamSlice/secondParam.actions.js";


export const FirstParamBlock = () => {
  const dispatch = useDispatch();
  const firstParam = useSelector(selectFirstParam);
  const secondParam = useSelector(selectSecondParam);
  const thirdParam = useSelector(selectThirdBlock);
  const forthParam = useSelector(selectForthParam);
  const fifthParam = useSelector(selectFifthParam);

  const source = ['Лонгитюдная система']

  const sourceData = source.map(item => ({
    label: item,
    value: {id: item, name: item, slave: item},
  }))

  const firstParamData = firstParam && firstParam.map(item => ({
    label: item.category_name,
    value: {id: item.category_id, name: item.category_name, slave: item.slave_block_name},
  }));

  const secondParamData = secondParam && secondParam.map(item => ({
    label: item.category_name,
    value: {id: item.category_id, name: item.category_name, slave: item.slave_block_name},
  }))

  const thirdParamData = thirdParam && thirdParam.map(item => ({
    label: item.category_name,
    value: {id: item.category_id, name: item.category_name, slave: item.slave_block_name},
  }))

  const forthParamData = forthParam && forthParam.map(item => ({
    label: item.category_name,
    value: {id: item.category_id, name: item.category_name, slave: item.slave_block_name},
  }))

  const fifthParamData = fifthParam && fifthParam.map(item => ({
    label: item.category_name,
    value: {id: item.category_id, name: item.category_name, slave: item.slave_block_name, scale: item.scale_type},
  }))

  const handleSegmentSave = (value) => {
    dispatch(setFirstBlockParamBlockId(value.slave))
    dispatch(setFirstBlockParamCategoryId(value.id))
    dispatch(fetchGetSecondParams({block_id: value.id, category_id: value.slave}))
  }

  const handleCategorySave = (value) => {
    dispatch(setSecondBlockParamBlockId(value.slave))
    dispatch(setSecondBlockParamBlockCategoryId(value.id))
    dispatch(fetchGetThirdParams({block_id: value.id, category_id: value.slave}))
  }

  const handleBlock3Save = (value) => {
    dispatch(setThirdBlockParamBlockId(value.slave))
    dispatch(setThirdBlockParamBlockCategoryId(value.id))
    dispatch(fetchGetForthParams({block_id: value.id, category_id: value.slave}))
  }

  const handleBlock4Save = (value) => {
    dispatch(setForthBlockParamBlockId(value.slave))
    dispatch(setForthBlockParamBlockCategoryId(value.id))
    dispatch(fetchGetFifthParams({block_id: value.id, category_id: value.slave}))
  }

  const handleBlock5Save = (value) => {
    dispatch(setQuestion1(value.id))
    console.log(value)
    // dispatch(setBlockId(value.id))
    dispatch(setIsFirstParamDone(true))
    dispatch(fetchGetNextFirstParams())
    dispatch(setLong(false))
    dispatch(setFifthBlockParamBlockId(value.slave))
    dispatch(setFifthBlockParamBlockCategoryId(value.id))
    dispatch(fetchGetAnswers(value.id))
    dispatch(setAnswerTitle(value.name))
    dispatch(setFifthBlockParamScaleType(value.scale))
  }

  return (
    <div className={styles.container}>
      <span>Выбор параметра 1</span>
      <SelectPicker
        className={styles.picker}
        data={sourceData}
        placeholder={'Источник'}
      />
      <SelectPicker
        className={styles.picker}
        data={firstParamData}
        placeholder={'Сегмент'}
        onChange={handleSegmentSave}
      />
      <SelectPicker
        className={styles.picker}
        data={secondParamData}
        placeholder={'Категория'}
        onChange={handleCategorySave}
      />
      <SelectPicker
        className={styles.picker}
        data={thirdParamData}
        placeholder={'Подкатегория'}
        onChange={handleBlock3Save}
      />
      <SelectPicker
        className={styles.picker}
        data={forthParamData}
        placeholder={'Группа параметров'}
        onChange={handleBlock4Save}
      />
      <SelectPicker
        className={styles.picker}
        data={fifthParamData}
        placeholder={'Параметр'}
        onChange={handleBlock5Save}
      />
    </div>
  );
};