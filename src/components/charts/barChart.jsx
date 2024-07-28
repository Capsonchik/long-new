import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import {selectSecondParam} from "../../store/mainSelectors.js";

export const BarChart = () => {
  const secondParam = useSelector(selectSecondParam)
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
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: secondParam ? twoData : oneData
  };

  return (
    <ReactECharts style={{height: 300}} option={option}/>
  );
};