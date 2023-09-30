import * as d3 from 'd3';

const Nose = (parentElement, mode) => {
  switch (mode) {
    case 'low':
      parentElement
        .append('rect')
        .attr('x', 50.5)
        .attr('y', 45)
        .attr('width', 7)
        .attr('height', 12)
        .attr('rx', 2)
        .attr('fill', '#805b10');
      break;
    case 'high':
      parentElement
        .append('rect')
        .attr('x', 48)
        .attr('y', 38)
        .attr('width', 10)
        .attr('height', 22)
        .attr('rx', 4)
        .attr('fill', '#805b10');
      break;
    default:
  }
  return;
};

export default Nose;
