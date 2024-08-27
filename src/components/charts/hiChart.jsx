import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import {selectHiData} from "../../store/hiSlice/hi.selectors.js";

export const HiChart = () => {
  const hiData = useSelector(selectHiData);

  const transformedData = hiData && hiData.data.map((item) => {
    const total = item.stat.reduce((sum, value) => sum + value, 0);
    const percentageData = item.stat.map((value) => (value / total) * 100);


    return {
      name: item.label,
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        // formatter: ({value}) => `${value.toFixed(2)}%`
      },
      emphasis: {
        focus: 'series'
      },
      data: item.stat
    };
  });

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
      type: 'value',
      max: 100
    },
    yAxis: {
      type: 'category',
      data: hiData.labels
    },
    series: transformedData
  };

  return (
    <ReactECharts style={{height: 300}} option={option}/>
  );
};