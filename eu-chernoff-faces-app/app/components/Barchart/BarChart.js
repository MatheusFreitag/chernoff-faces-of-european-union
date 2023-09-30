// components/BarChart.js

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './BarChart.module.css';

const BarChart = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // D3.js code for rendering the bar chart
    const data = [
      { label: 'A', value: 30 },
      { label: 'B', value: 50 },
      { label: 'C', value: 20 },
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.label))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.value));
  }, []);

  return (
    <div>
      <svg className={styles.container} ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
