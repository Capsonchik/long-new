import {Drawer} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectAnaliticDrawerStatus} from "../../../store/drawerSlice/drawer.selectors.js";
import {setAnaliticDrawer} from "../../../store/drawerSlice/drawer.slice.js";
import {ExternalFactors} from "../../externalFactors/ExternalFactors.jsx";

export const AnaliticDrawer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectAnaliticDrawerStatus);

  return (
    <Drawer open={status} onClose={() => dispatch(setAnaliticDrawer(false))}>
      <Drawer.Body style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span>Витрина аналитики</span>
        <ExternalFactors/>
      </Drawer.Body>
    </Drawer>
  );
};