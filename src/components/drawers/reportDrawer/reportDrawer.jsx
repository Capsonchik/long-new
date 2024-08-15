import {setReportDrawer} from "../../../store/drawerSlice/drawer.slice.js";
import {Drawer} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectReportDrawer} from "../../../store/drawerSlice/drawer.selectors.js";

export const ReportDrawer = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectReportDrawer);

  return (
    <Drawer open={status} onClose={() => dispatch(setReportDrawer(false))}>
      <Drawer.Body style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <span>Отображение отчета</span>
        
      </Drawer.Body>
    </Drawer>
  );
};