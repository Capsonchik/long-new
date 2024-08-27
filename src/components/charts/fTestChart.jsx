import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import {selectFtestData} from "../../store/fTestSlice/fTest.selectors.js";

export const FTestChart = () => {
  const fTestData = useSelector(selectFtestData);

  const option = {
    title: [
      {
        text: 'Ф-тест Фишера',
        left: 'center'
      },
      // {
      //   text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
      //   borderColor: '#999',
      //   borderWidth: 1,
      //   textStyle: {
      //     fontWeight: 'normal',
      //     fontSize: 14,
      //     lineHeight: 20
      //   },
      //   left: '10%',
      //   top: '90%'
      // }
    ],
    dataset: [
      {
        // prettier-ignore
        source: fTestData.source
      },
      {
        transform: {
          type: 'boxplot',
          config: {
            itemNameFormatter: function (param) {
              return fTestData.labels[param.value];
            }
          }
        }
      },
      {
        fromDatasetIndex: 1,
        fromTransformResult: 1
      }
    ],
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      nameGap: 30,
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      name: '',
      splitArea: {
        show: true
      }
    },
    series: [
      {
        name: 'boxplot',
        type: 'boxplot',
        datasetIndex: 1
      },
      {
        name: 'outlier',
        type: 'scatter',
        datasetIndex: 2
      }
    ]
  };

  return (
    <ReactECharts style={{height: 500}} option={option}/>
  );
};