import styles from './styles.module.scss';
import {Button, SelectPicker} from "rsuite";

export const Period = () => {
  const data = [
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
  ].map(item => ({label: item, value: item}));

  return (
    <div className={styles.container}>
      <span>Время</span>
      <Button>1 год</Button>
      <Button>6 месяцев</Button>
      <Button>3 месяца</Button>
      <Button>1 месяц</Button>
      <Button>1 неделя</Button>
      <SelectPicker data={data}/>
    </div>
  );
};