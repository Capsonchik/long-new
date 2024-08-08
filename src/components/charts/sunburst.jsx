import ReactECharts from "echarts-for-react";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectGraphKey, selectSunBurstData} from "../../store/sunBirstSlice/sunBurst.selectors.js";
import {fetchGetNextSunBurst, fetchGetSunBurstBack} from "../../store/sunBirstSlice/sunBurst.actions.js";
import {Button} from "rsuite";

export const Sunburst = () => {
  const [currentValue, setCurrentValue] = useState(null)
  const sunBurstData = useSelector(selectSunBurstData);
  const key = useSelector(selectGraphKey);
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState([])
  const chartRef = useRef(null)

  const handleBack = () => {
    dispatch(fetchGetSunBurstBack(currentValue))
  }


  useEffect(() => {
    setCurrentData(sunBurstData);
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption({
        series: [{data: sunBurstData}]
      });
    }
  }, [sunBurstData]);

  useEffect(() => {
    if (currentValue) {
      dispatch(fetchGetNextSunBurst(currentValue))
    }
  }, [currentValue]);

  const onChartClick = (params) => {
    setCurrentValue(params.data.name)
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
      <Button style={{position: 'absolute', zIndex: 999}} onClick={handleBack}>Назад</Button>
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