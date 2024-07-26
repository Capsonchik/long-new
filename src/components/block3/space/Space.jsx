import styles from './styles.module.scss';
import {Button, SelectPicker} from "rsuite";
import {REGION} from "../../../mocks/regionMock.js";

export const Space = () => {
  const data = REGION.map(item => ({label: item, value: item}));
  return (
    <div className={styles.container}>
      <span>Пространство</span>
      <Button>Страна</Button>
      <Button>Федеральный округ</Button>
      <Button>Регион</Button>
      <Button>Город</Button>
      <Button>Муниципалитет</Button>
      <Button>Избирательный участок</Button>
      <SelectPicker data={data}/>
    </div>
  );
};