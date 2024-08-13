import ReactECharts from "echarts-for-react";
import {Button} from "rsuite";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGetSecondSunBurst} from "../../store/sunBirstSlice/sunBurst.actions.js";
import {
  selectNextSunBurstData,
  selectNextSunBurstKey,
  selectSecondCurrentValue
} from "../../store/sunBirstSlice/sunBurst.selectors.js";

export const SunBurstNext = () => {
  const dispatch = useDispatch();
  const secondCurrentValue = useSelector(selectSecondCurrentValue);
  const [currentValue, setCurrentValue] = useState('');
  const secondSunBurst = useSelector(selectNextSunBurstData);
  const key = useSelector(selectNextSunBurstKey);

  useEffect(() => {
    if (currentValue) {
      dispatch(fetchGetSecondSunBurst(currentValue))
    }
  }, [currentValue, dispatch]);


  const onChartClick = (params) => {
    setCurrentValue(params.data.name)
  };

  const onEvents = {
    click: onChartClick
  };

  const handleBack = () => {

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
      data: secondSunBurst,
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
        key={key}
        style={{height: 400, width: 400}}
        option={option}
        onEvents={onEvents}
      />
    </div>
  );
};