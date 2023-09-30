import * as d3 from 'd3';

const Eyes = (parentElement) => {
  // Left
  parentElement
    .append('circle')
    .style('fill', '#805b10')
    .attr('cx', 34)
    .attr('cy', 35)
    .attr('r', 6);

  // Right Eye
  parentElement
    .append('circle')
    .style('fill', '#805b10')
    .attr('cx', 74)
    .attr('cy', 35)
    .attr('r', 6);

  return;
};

export default Eyes;
