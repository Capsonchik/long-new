import {setExternalDrawer} from "../../../store/drawerSlice/drawer.slice.js";
import {Drawer} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectExternalDrawer} from "../../../store/drawerSlice/drawer.selectors.js";

export const ExternalDrawer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectExternalDrawer);

  return (
    <Drawer open={status} onClose={() => dispatch(setExternalDrawer(false))}>
      <Drawer.Body style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span>Внешние факторы</span>

      </Drawer.Body>
    </Drawer>
  );
};