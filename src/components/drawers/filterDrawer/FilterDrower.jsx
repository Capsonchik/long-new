import {Drawer} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectFilterDrawerStatus} from "../../../store/mainSelectors.js";
import {setFilterDrawerStatus} from "../../../store/mainSlice.js";
import {Block3Component} from "../../block3/Block3Component.jsx";

export const FilterDrawer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectFilterDrawerStatus)

  return (
    <Drawer open={status} onClose={() => dispatch(setFilterDrawerStatus(false))}>
      <Drawer.Body style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span>Укажите параметры фильтрации</span>
        <Block3Component/>
      </Drawer.Body>
    </Drawer>
  );
};