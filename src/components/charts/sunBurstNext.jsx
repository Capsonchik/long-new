import ReactECharts from "echarts-for-react";
import {Button} from "rsuite";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  fetchGetNextBackData,
  fetchGetNextDefaultSunBurst,
  fetchGetNextSunBurstBack,
  fetchGetSecondSunBurst
} from "../../store/sunBirstSlice/sunBurst.actions.js";
import {
  selectNextBackData,
  selectNextSunBurstData,
  selectNextSunBurstKey,
  selectSecondCurrentValue
} from "../../store/sunBirstSlice/sunBurst.selectors.js";
import {setNextBackData, setSecondCurrentValue} from "../../store/sunBirstSlice/sunBurst.slice.js";

export const SunBurstNext = () => {
  const dispatch = useDispatch();
  const secondCurrentValue = useSelector(selectSecondCurrentValue);
  // const [currentValue, setCurrentValue] = useState('');
  const secondSunBurst = useSelector(selectNextSunBurstData);
  const backData = useSelector(selectNextBackData);
  const key = useSelector(selectNextSunBurstKey);
  const chartRef = useRef(null)

  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    setCurrentData(secondSunBurst);
    if (chartRef.current) {
      chartRef.current.getEchartsInstance().setOption({
        series: [{data: secondSunBurst}]
      });
    }
  }, [secondSunBurst]);

  useEffect(() => {
    if (secondCurrentValue) {
      dispatch(fetchGetSecondSunBurst(secondCurrentValue))
    }
  }, [secondCurrentValue, dispatch]);

  const onChartClick = (params) => {
    // setCurrentValue(params.data.name)
    dispatch(setSecondCurrentValue(params.data.name))
    dispatch(setNextBackData(params.data.name))
    dispatch(fetchGetSecondSunBurst(params.data.name));
  };

  const onEvents = {
    click: onChartClick
  };

  const handleBack = () => {
    if (backData === null) {
      dispatch(fetchGetNextDefaultSunBurst())
    } else {
      dispatch(fetchGetNextSunBurstBack(backData))
      dispatch(fetchGetNextBackData(backData))
    }
  }

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
        onClick={handleBack}
        style={{position: 'absolute', zIndex: 999}}
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