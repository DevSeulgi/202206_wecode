import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import 'zingchart/modules-es6/zingchart-depth.min.js';
import styled from 'styled-components';

const ZingChartTest = () => {
  const myData = {
    type: 'mixed',
    series: [
      {
        type: 'scatter',
        tooltip: { visible: false },
        marker: {
          'background-color': 'rgba(80, 227, 194, 0.5)',
          'border-color': 'none',
          'background-repeat': 'no-repeat',
          shadow: false,
          size: 40,
        },
        values: [[2007, 750]],
      },
      {
        type: 'scatter',
        tooltip: { visible: false },
        marker: {
          'background-color': 'rgba(1, 111, 196, 0.2)',
          'border-color': 'none',
          'background-repeat': 'no-repeat',
          shadow: false,
          size: 8,
        },
        values: [
          [2002, 400],
          [2002, 300],
          [2003, 360],
          [2003, 350],
          [2003, 290],
          [2004, 580],
          [2005, 500],
          [2005, 520],
          [2005, 590],
          [2005, 510],
          [2005, 620],
          [2006, 700],
          [2006, 520],
          [2006, 570],
          [2007, 710],
          [2007, 700],
          [2007, 750],
          [2008, 900],
          [2008, 820],
          [2008, 850],
          [2008, 830],
          [2009, 880],
          [2009, 850],
          [2009, 820],
          [2009, 950],
        ],
      },
      {
        type: 'line',
        tooltip: { visible: false },
        aspect: 'spline',
        marker: {
          visible: false,
        },
        'line-width': 1,
        'line-style': '',
        'line-color': '#3dc6c3',
        values: [
          [2001, 300],
          [2010, 950],
        ],
      },
    ],
  };

  return (
    <GraphWrapper>
      <ZingChart width="600px" height="300px" data={myData} />
    </GraphWrapper>
  );
};

export default ZingChartTest;

const GraphWrapper = styled.div`
  ${({ theme }) => theme.flex.flexBox};
`;
