import {setSpaceAndTimeDrawer} from "../../../store/drawerSlice/drawer.slice.js";
import {Drawer} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectSpaceAndTimeDrawer} from "../../../store/drawerSlice/drawer.selectors.js";

export const SpaceDrawer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectSpaceAndTimeDrawer);

  return (
    <Drawer open={status} onClose={() => dispatch(setSpaceAndTimeDrawer(false))}>
      <Drawer.Body style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span>Пространство и время</span>

      </Drawer.Body>
    </Drawer>
  );
};