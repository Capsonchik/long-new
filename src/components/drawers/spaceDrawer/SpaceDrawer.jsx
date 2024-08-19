import styles from './styles.module.scss';
import {setSpaceAndTimeDrawer} from "../../../store/drawerSlice/drawer.slice.js";
import {CheckPicker, Drawer, Panel, SelectPicker} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectSpaceAndTimeDrawer} from "../../../store/drawerSlice/drawer.selectors.js";
import {DATE_TO_PICK, PERIOD, SPACE} from "../../../mocks/regionMock.js";
import {useState} from "react";
import {dateToPickFormatter} from "../../helpers/dateHelper.js";
import {regionFormatter} from "../../helpers/regionHelper.js";

export const SpaceDrawer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectSpaceAndTimeDrawer);
  const [format, setFormat] = useState([])
  const [currentRegionData, setCurrentRegionData] = useState([])

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

  const regionData = currentRegionData.map(item => ({
    label: item,
    value: {id: item, name: item, slave: item},
  }))

  const formatData = format.map(item => ({
    label: item,
    value: {id: item, name: item, slave: item},
  }))

  const handlePeriodChange = (value) => {
    if (value === null) {
      return periodData;
    } else {
      const currentFormat = dateToPickFormatter(value.name)
      setFormat(currentFormat)
    }
  }

  const handleRegionChenge = (value) => {
    if (value === null) {
      return spaceData
    } else {
      const currentFormat = regionFormatter(value.name)
      setCurrentRegionData(currentFormat)
    }
  }

  return (
    <Drawer open={status} onClose={() => dispatch(setSpaceAndTimeDrawer(false))}>
      <Drawer.Body style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span>Пространство и время</span>
        <Panel bordered>
          <div className={styles.topFiltersBlock}>
            <div className={styles.topFiltersBlockContent}>
              <span>Время</span>
              <SelectPicker
                className={styles.picker}
                data={periodData}
                placeholder={'Период'}
                onChange={handlePeriodChange}
              />
              <CheckPicker
                className={styles.picker}
                data={formatData}
                placeholder={'Фильтр'}
              />
            </div>
            <div className={styles.topFiltersBlockContent}>
              <span>Пространство</span>
              <SelectPicker
                data={spaceData}
                placeholder={'География'}
                onChange={handleRegionChenge}
              />
              <CheckPicker
                data={regionData}
                placeholder={'Фильтр'}
              />
            </div>
          </div>
        </Panel>
      </Drawer.Body>
    </Drawer>
  );
};