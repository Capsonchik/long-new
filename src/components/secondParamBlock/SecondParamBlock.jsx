import styles from './styles.module.scss';
import {SelectPicker} from "rsuite";
import {BLOCK_1_PARAMS} from "../../mocks/paramsMock.js";
import {useDispatch, useSelector} from "react-redux";
import {
  selectNextFifthParam,
  selectNextFirstParam,
  selectNextForthParam,
  selectNextSecondParam,
  selectNextThirdParam
} from "../../store/secondParamSlice/secondParamSelectors.js";
import {
  setNextParamFirstBlockParamBlockCategoryId,
  setNextParamFirstBlockParamBlockId,
  setNextParamForthBlockParamBlockId,
  setNextParamSecondBlockParamBlockCategoryId,
  setNextParamSecondBlockParamBlockId,
  setNextParamThirdBlockParamBlockCategoryId,
  setNextParamThirdBlockParamBlockId
} from "../../store/secondParamSlice/secondParam.slice.js";
import {
  fetchGetNextFifthParams,
  fetchGetNextForthParams,
  fetchGetNextSecondParams,
  fetchGetNextThirdParams
} from "../../store/secondParamSlice/secondParam.actions.js";


export const SecondParamBlock = () => {
  const dispatch = useDispatch();
  const firstParam = useSelector(selectNextFirstParam);
  const secondParam = useSelector(selectNextSecondParam);
  const thirdParam = useSelector(selectNextThirdParam);
  const forthParam = useSelector(selectNextForthParam);
  const fifthParam = useSelector(selectNextFifthParam);


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
    value: {id: item.category_id, name: item.category_name, slave: item.slave_block_name},
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


  const data = BLOCK_1_PARAMS.map(item => ({label: item, value: item}));

  return (
    <div className={styles.container}>
      <span className={styles.topBtn}>Выбор параметра 2</span>
      <SelectPicker
        onChange={handleSegmentSave}
        className={styles.picker}
        data={firstParamData}
        placeholder={'Сегмент'}
      />
      <SelectPicker
        onChange={handleCategorySave}
        className={styles.picker}
        data={secondParamData}
        placeholder={'Категория'}
      />
      <SelectPicker
        onChange={handleBlock3Save}
        className={styles.picker}
        data={thirdParamData}
        placeholder={'Подкатегория'}
      />
      <SelectPicker
        onChange={handleBlock4Save}
        className={styles.picker}
        data={forthParamData}
        placeholder={'Группа параметров'}
      />
      <SelectPicker
        className={styles.picker}
        data={fifthParamData}
        placeholder={'Параметр'}
      />
    </div>
  );
};