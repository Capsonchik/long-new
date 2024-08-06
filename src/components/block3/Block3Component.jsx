import styles from './styles.module.scss';
import {Button, CheckPicker, SelectPicker} from "rsuite";
import {DATE_TO_PICK, PERIOD, REGION, SPACE} from "../../mocks/regionMock.js";

export const Block3Component = () => {
  const data = ['test', 'test2', 'test3'];
  const period = ['2019', '2020', '2021', '2022', '2023', '2024'];

  const dateToPick = DATE_TO_PICK.map(item => ({
    label: item,
    value: {id: item, name: item, slave: item},
  }));

  const periodData = PERIOD.map(item => ({
    label: item,
    value: {id: item, name: item, slave: item},
  }))

  const spaceData = SPACE.map(item => ({
    label: item,
    value: {id: item, name: item, slave: item},
  }))

  const regionData = REGION.map(item => ({
    label: item,
    value: {id: item, name: item, slave: item},
  }))

  return (
    <div className={styles.container}>
      <div className={styles.topFiltersBlock}>
        <div className={styles.topFiltersBlockContent}>
          <span>Время</span>
          <SelectPicker className={styles.picker} data={periodData} placeholder={'Период'}/>
          <CheckPicker className={styles.picker} data={dateToPick} placeholder={'Фильтр'}/>
        </div>
        <div className={styles.topFiltersBlockContent}>
          <span>Пространство</span>
          <SelectPicker data={spaceData} placeholder={'География'}/>
          <CheckPicker data={regionData} placeholder={'Фильтр'}/>
        </div>
      </div>
      <div className={styles.filtersBlock}>
        <span className={styles.filtersTitle}>Инфополе</span>
        <div className={styles.buttonsBlock}>
          <Button className={styles.button} appearance={'primary'} color={'orange'}>Новости</Button>
          <Button className={styles.button} appearance={'primary'} color={'orange'}>События</Button>
        </div>
      </div>
      <div className={styles.filtersBlock}>
        <span>Внешние факторы</span>
        <div className={styles.buttonsBlock}>
          <Button className={styles.button} appearance={'primary'} color={'orange'}>Природные</Button>
          <Button className={styles.button} appearance={'primary'} color={'orange'}>Экономические</Button>
          <Button className={styles.button} appearance={'primary'} color={'orange'}>Политические</Button>
          <Button className={styles.button} appearance={'primary'} color={'orange'}>Социальные</Button>
        </div>
      </div>
      <div className={styles.filtersBlock}>
        <span>Получение отчета</span>
        <div className={styles.buttonsBlock}>
          <Button className={styles.button} appearance={'primary'} color={'orange'}>График</Button>
          <Button className={styles.button} appearance={'primary'} color={'orange'}>Excel файл</Button>
        </div>
      </div>
    </div>
  );
};