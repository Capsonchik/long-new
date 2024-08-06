import styles from './styles.module.scss';
import {Button, SelectPicker} from "rsuite";

export const Block3Component = () => {
  const data = ['test', 'test2', 'test3'];

  const dataParam = data.map(item => ({
    label: item,
    value: {id: item, name: item, slave: item},
  }));

  return (
    <div className={styles.container}>
      <div className={styles.topFiltersBlock}>
        <div className={styles.topFiltersBlockContent}>
          <span>Время</span>
          <SelectPicker className={styles.picker} data={dataParam} placeholder={'Период'}/>
          <SelectPicker className={styles.picker} data={dataParam} placeholder={'Фильтр'}/>
        </div>
        <div className={styles.topFiltersBlockContent}>
          <span>Пространство</span>
          <SelectPicker data={dataParam} placeholder={'География'}/>
          <SelectPicker data={dataParam} placeholder={'Фильтр'}/>
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
          <Button className={styles.button} appearance={'primary'} color={'orange'}>Exel файл</Button>
        </div>
      </div>
    </div>
  );
};