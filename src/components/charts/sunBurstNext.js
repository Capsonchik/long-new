import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSunBurstData} from "../../store/sunBirstSlice/sunBurst.selectors.js";
import {fetchGetDefaultSunBurst, fetchGetNextSunBurst} from "../../store/sunBirstSlice/sunBurst.actions.js";
import ReactECharts from "echarts-for-react";
import {SUN_DATA_MINI} from "../../mocks/sunData.js";

export const SunBurstNext = () => {
  const [currentValue, setCurrentValue] = useState('')
  const sunBurstData = useSelector(selectSunBurstData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentValue) {
      dispatch(fetchGetNextSunBurst(currentValue))
      setKey(key + 1);
      console.log('dspjd')
    } else {
      dispatch(fetchGetDefaultSunBurst())
    }
  }, [currentValue]);

  const initialData = [
    {
      name: 'Биология',
      value: 10,
      children: [
        {
          name: 'CJwb',
          value: 5,
          children: [
            {
              name: 'dfsdfsf',
              value: 10,
            }
          ]
        }
      ]
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

  const [data, setData] = useState(initialData);
  const [key, setKey] = useState(0)

  const addChild = (name) => {
    const updateData = (items) => {
      return items.map((item) => {
        if (item.name === name) {
          if (!item.children) {
            item.children = [];
          }
          item.children.push({
            name: `New Child ${item.children.length + 1}`,
            value: Math.floor(Math.random() * 10) + 1
          });
        } else if (item.children) {
          item.children = updateData(item.children);
        }
        return item;
      });
    };

    setData(updateData(data));
    // setKey(key + 1);
  };

  const option = {
    // отключает полоску с левой стороны
    // visualMap: {
    //   type: 'continuous',
    //   min: 0,
    //   max: 10,
    //   inRange: {
    //     color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
    //   }
    // },
    series: {
      type: 'sunburst',
      data: SUN_DATA_MINI,
      radius: [0, '90%'],
      label: {
        rotate: 'radial'
      },
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
    }
  };

  const onChartClick = (params) => {
    if (params.data.name === 'Биология') {
      addChild('Биология');
      // alert('Child added to Биология');
    } else if (params.data.name === 'Социология') {
      addChild('Социология');
    }
    setCurrentValue(params.data.name)
  };

  const onEvents = {
    click: onChartClick
  };
  return (
    <div>
      <ReactECharts
        key={key}
        style={{height: 400, width: 400}}
        option={option}
        onEvents={onEvents}
      />
    </div>
  );
};