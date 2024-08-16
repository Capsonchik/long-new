import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import {selectCorelationData} from "../../store/corelationSlice/corelation.selectors.js";

export const CorelationChart = () => {
  const corelationData = useSelector(selectCorelationData);

  const option = {
    dataset: [
      {
        source: corelationData.data
      },
      // {
      //   // transform: {
      //   //   type: 'ecStat:regression',
      //   //   // 'linear' by default.
      //   //   config: {method: 'linear', formulaOn: 'end'}
      //   // }
      // }
    ],
    title: {
      text: 'Linear Regression',
      subtext: 'By ecStat.regression',
      sublink: 'https://github.com/ecomfe/echarts-stat',
      left: 'center'
    },
    legend: {
      bottom: 5
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [
      {
        name: 'scatter',
        type: 'scatter'
      },
      {
        name: 'line',
        type: 'line',
        datasetIndex: 1,
        symbolSize: 0.1,
        symbol: 'circle',
        label: {show: true, fontSize: 16},
        labelLayout: {dx: -20},
        encode: {label: 2, tooltip: 1}
      }
    ]
  };

  return (
    <ReactECharts style={{height: 500}} option={option}/>
  );
};