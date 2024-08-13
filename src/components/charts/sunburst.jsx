import ReactECharts from "echarts-for-react";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  selectBackData,
  selectFirstCurrentValue,
  selectGraphKey,
  selectSunBurstData
} from "../../store/sunBirstSlice/sunBurst.selectors.js";
import {
  fetchGetBackData,
  fetchGetDefaultSunBurst,
  fetchGetNextSunBurst,
  fetchGetSunBurstBack
} from "../../store/sunBirstSlice/sunBurst.actions.js";
import {Button} from "rsuite";
import {setFirstBackData, setFirstCurrentValue} from "../../store/sunBirstSlice/sunBurst.slice.js";

export const Sunburst = () => {
  const [currentValue, setCurrentValue] = useState('')
  const sunBurstData = useSelector(selectSunBurstData);
  const key = useSelector(selectGraphKey);
  const backData = useSelector(selectBackData);
  const value = useSelector(selectFirstCurrentValue);
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState([])
  const chartRef = useRef(null)

  const handleBack = () => {
    if (backData === null) {
      dispatch(fetchGetDefaultSunBurst())
    } else {
      dispatch(fetchGetSunBurstBack(backData))
      dispatch(fetchGetBackData(backData))
    }
  }

  useEffect(() => {
    setCurrentData(sunBurstData);
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption({
        series: [{data: sunBurstData}]
      });
    }
  }, [sunBurstData]);

  const onChartClick = (params) => {
    dispatch(setFirstCurrentValue(params.data.name))
    dispatch(fetchGetNextSunBurst(params.data.name))
    dispatch(setFirstBackData(params.data.name))
  };

  const onEvents = {
    click: onChartClick
  };

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.name;
      }
    },
    series: {
      type: 'sunburst',
      data: currentData,
      radius: [0, '90%'],
      label: {
        rotate: 'radial',
        overflow: 'truncate',
        ellipsis: '...',
        formatter: function (params) {
          const maxLabelLength = 10;
          const label = params.name;
          if (label.length > maxLabelLength) {
            return label.substring(0, maxLabelLength) + '...';
          }
          return label;
        }
      },
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
    }
  };

  return (
    <div style={{position: 'relative'}}>
      <Button
        style={{position: 'absolute', zIndex: 999}}
        onClick={handleBack}
        disabled={backData === '' || backData === null}
      >
        Назад
      </Button>
      <ReactECharts
        ref={chartRef}
        key={key}
        style={{height: 400, width: 400}}
        option={option}
        onEvents={onEvents}
      />
    </div>
  );
};