import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import {selectFormatter, selectNextParamGraphData} from "../../store/secondParamSlice/secondParamSelectors.js";

export const BarChart = () => {
  const nextGraphData = useSelector(selectNextParamGraphData);
  const formatter = useSelector(selectFormatter);

  // const transformedDataNumber = nextGraphData && nextGraphData.data.map((item) => ({
  //
  //   name: item.label,
  //   type: 'bar',
  //   stack: 'total',
  //   label: {
  //     show: true,
  //     formatter: '{c}%'
  //   },
  //   emphasis: {
  //     focus: 'series'
  //   },
  //   data: item.stat
  // }));

  const transformedData = nextGraphData && nextGraphData.data.map((item) => {
    const total = item.stat.reduce((sum, value) => sum + value, 0);
    const percentageData = item.stat.map((value) => (value / total) * 100);


    return {
      name: item.label,
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        formatter: ({value}) => `${value.toFixed(2)}%`
      },
      emphasis: {
        focus: 'series'
      },
      data: percentageData
    };
  });

  console.log('transformedData', transformedData);

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: (params) => {
        let tooltipText = '';
        params.forEach(param => {
          tooltipText += `${param.seriesName}: ${param.value.toFixed(2)}%<br/>`;
        });
        return tooltipText;
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: nextGraphData ? nextGraphData.labels : null,
    },
    series: nextGraphData ? transformedData : null
  };

  return (
    <ReactECharts style={{height: 500}} option={option}/>
  );
};