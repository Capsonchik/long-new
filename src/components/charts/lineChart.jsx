import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import {selectGraphData} from "../../store/firstParamsSlice/firstParam.selectors.js";

export const LineChart = () => {
  const graphData = useSelector(selectGraphData);


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
        type: 'line',
        smooth: true
      }
    ]
  };


  return (
    <ReactECharts style={{height: 300}} option={option}/>
  );
};