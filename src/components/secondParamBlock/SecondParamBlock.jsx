import styles from './styles.module.scss';
import {SelectPicker} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {
  selectNextFifthParam,
  selectNextFirstParam,
  selectNextForthParam,
  selectNextSecondParam,
  selectNextThirdParam
} from "../../store/secondParamSlice/secondParamSelectors.js";
import {
  setIsSecondParamDone,
  setNextAnswerTitle,
  setNextParamFifthBlockParamBlockCategoryId,
  setNextParamFifthBlockParamBlockId,
  setNextParamFifthBlockScaleType,
  setNextParamFirstBlockParamBlockCategoryId,
  setNextParamFirstBlockParamBlockId,
  setNextParamForthBlockParamBlockId,
  setNextParamSecondBlockParamBlockCategoryId,
  setNextParamSecondBlockParamBlockId,
  setNextParamThirdBlockParamBlockCategoryId,
  setNextParamThirdBlockParamBlockId
} from "../../store/secondParamSlice/secondParam.slice.js";
import {
  fetchGetNextAnswers,
  fetchGetNextFifthParams,
  fetchGetNextForthParams,
  fetchGetNextSecondParams,
  fetchGetNextThirdParams
} from "../../store/secondParamSlice/secondParam.actions.js";
import {selectIsFirstParamDone} from "../../store/firstParamsSlice/firstParam.selectors.js";
import {setQuestion2} from "../../store/firstParamsSlice/firstParam.slice.js";


export const SecondParamBlock = () => {
  const dispatch = useDispatch();
  const firstParam = useSelector(selectNextFirstParam);
  const secondParam = useSelector(selectNextSecondParam);
  const thirdParam = useSelector(selectNextThirdParam);
  const forthParam = useSelector(selectNextForthParam);
  const fifthParam = useSelector(selectNextFifthParam);
  const isFirstParamDone = useSelector(selectIsFirstParamDone);

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
    dispatch(setNextParamFirstBlockParamBlockId(value.slave))
    dispatch(setNextParamFirstBlockParamBlockCategoryId(value.id))
    dispatch(fetchGetNextSecondParams({block_id: value.id, category_id: value.slave}))
  }

  const handleCategorySave = (value) => {
    dispatch(setNextParamSecondBlockParamBlockId(value.slave))
    dispatch(setNextParamSecondBlockParamBlockCategoryId(value.id))
    dispatch(fetchGetNextThirdParams({block_id: value.id, category_id: value.slave}))
  }

  const handleBlock3Save = (value) => {
    dispatch(setNextParamThirdBlockParamBlockCategoryId(value.id))
    dispatch(setNextParamThirdBlockParamBlockId(value.slave))
    dispatch(fetchGetNextForthParams({block_id: value.id, category_id: value.slave}))
  }

  const handleBlock4Save = (value) => {
    dispatch(setNextParamForthBlockParamBlockId(value.slave))
    dispatch(setNextParamThirdBlockParamBlockCategoryId(value.id))
    dispatch(fetchGetNextFifthParams({block_id: value.id, category_id: value.slave}))
  }

  const handleBlcok5Save = (value) => {
    dispatch(setIsSecondParamDone(true))
    dispatch(setNextParamFifthBlockParamBlockId(value.slave))
    dispatch(setNextParamFifthBlockParamBlockCategoryId(value.id))
    dispatch(setQuestion2(value.id))
    dispatch(fetchGetNextAnswers(value.id))
    dispatch(setNextAnswerTitle(value.name))
    dispatch(setNextParamFifthBlockScaleType(value.scale))
  }

  return (
    <div className={styles.container}>
      <span className={styles.topBtn}>Выбор параметра 2</span>
      <SelectPicker
        disabled={!isFirstParamDone}
        className={styles.picker}
        data={sourceData}
        placeholder={isFirstParamDone ? 'Сегмент' : 'Заполните первый параметр'}
      />
      <SelectPicker
        disabled={!isFirstParamDone}
        onChange={handleSegmentSave}
        className={styles.picker}
        data={firstParamData}
        placeholder={isFirstParamDone ? 'Сегмент' : 'Заполните первый параметр'}
      />
      <SelectPicker
        disabled={!isFirstParamDone}
        onChange={handleCategorySave}
        className={styles.picker}
        data={secondParamData}
        placeholder={isFirstParamDone ? 'Категория' : 'Заполните первый параметр'}
      />
      <SelectPicker
        disabled={!isFirstParamDone}
        onChange={handleBlock3Save}
        className={styles.picker}
        data={thirdParamData}
        placeholder={isFirstParamDone ? 'Подкатегория' : 'Заполните первый параметр'}
      />
      <SelectPicker
        disabled={!isFirstParamDone}
        onChange={handleBlock4Save}
        className={styles.picker}
        data={forthParamData}
        placeholder={isFirstParamDone ? 'Группа параметров' : 'Заполните первый параметр'}
      />
      <SelectPicker
        disabled={!isFirstParamDone}
        onChange={handleBlcok5Save}
        className={styles.picker}
        data={fifthParamData}
        placeholder={isFirstParamDone ? 'Параметр' : 'Заполните первый параметр'}
      />
    </div>
  );
};