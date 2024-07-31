import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import {selectGraphData} from "../../store/firstParamsSlice/firstParam.selectors.js";

export const BarChart = () => {
  const graphData = useSelector(selectGraphData);
  const oneData = [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]

  const twoData = [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    },
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]

  const option = {
    xAxis: {
      type: 'category',
      data: graphData ? graphData.labels : null
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: graphData ? graphData.data : null,
        type: 'bar',
      }
    ]
  };

  return (
    <ReactECharts style={{height: 300}} option={option}/>
  );
};