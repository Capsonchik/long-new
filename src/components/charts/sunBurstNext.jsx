import ReactECharts from "echarts-for-react";

export const SunBurstNext = () => {
  const onChartClick = (params) => {
    console.log(params.data.name)
  };

  const onEvents = {
    click: onChartClick
  };

  const initialData = [
    {
      name: 'Биология',
      value: 10,
    },
    {
      name: 'Социология',
      value: 10,
    },
    {
      name: 'Психология',
      value: 10
    },
  ];

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.name;
      }
    },
    series: {
      type: 'sunburst',
      data: initialData,
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
    <div>
      <ReactECharts
        style={{height: 400, width: 400}}
        option={option}
        onEvents={onEvents}
      />
    </div>
  );
};