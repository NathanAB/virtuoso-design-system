import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';

import styles from './DonutChart.css';

const colors = ['#ffbc76', '#c2b7fa', '#bae5b4', '#ff8f8e'];

const DonutChart = ({ data, onReset, children, onClick }) => {
  const [isHover, setHover] = useState(false);
  const highlight = (node, e) => {
    console.log(node, e);
    setHover(true);
  };
  const unhighlight = (node, e) => {
    setHover(false);
  };
  return (
    <div className={styles.container}>
      <ResponsivePie
        colors={colors}
        data={data}
        // padAngle={isHover ? 5 : 0}
        innerRadius={0.5}
        width={300}
        height={300}
        enableRadialLabels={false}
        enableSlicesLabels={false}
        sliceLabel={(d) => `<>${d.id} ${d.value}`}
        // colorBy={getColor}
        onMouseEnter={highlight}
        onMouseLeave={unhighlight}
        onClick={onClick}
        isInteractive
        tooltip={() => ''}
        // sortByValue
      />
    </div>
  );
};

DonutChart.propTypes = {};

DonutChart.defaultProps = {};

export default DonutChart;
