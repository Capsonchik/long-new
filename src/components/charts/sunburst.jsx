import ReactECharts from "echarts-for-react";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectBackData, selectGraphKey, selectSunBurstData} from "../../store/sunBirstSlice/sunBurst.selectors.js";
import {
  fetchGetBackData,
  fetchGetDefaultSunBurst,
  fetchGetNextSunBurst,
  fetchGetSunBurstBack
} from "../../store/sunBirstSlice/sunBurst.actions.js";
import {Button, Message, useToaster} from "rsuite";
import {setFirstBackData, setFirstCurrentValue} from "../../store/sunBirstSlice/sunBurst.slice.js";
import {fetchGetAnswers} from "../../store/firstParamsSlice/firstParam.actions.js";
import {setQuestion1} from "../../store/firstParamsSlice/firstParam.slice.js";

export const Sunburst = () => {
  const sunBurstData = useSelector(selectSunBurstData);
  const key = useSelector(selectGraphKey);
  const backData = useSelector(selectBackData);
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState([])
  const chartRef = useRef(null)
  const [placement, setPlacement] = useState('topEnd');
  const toaster = useToaster()

  const message = (
    <Message showIcon type={'success'} closable>
      <strong>{'Готово'}!</strong> Можно перейти к выбору второго параметра.
    </Message>
  );

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
    console.log('is last:', params.data.is_last_block)
    if (params.data.is_last_block) {
      toaster.push(message, {placement, duration: 3000})
      dispatch(setQuestion1(+params.data.id))
      dispatch(fetchGetAnswers(+params.data.id))
    }
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