import * as d3 from 'd3';

const Mouth = (parentElement, mode) => {
  const arcGenerator = d3
    .arc()
    .outerRadius(25)
    .innerRadius(0)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(5);
  switch (mode) {
    case 'low':
      parentElement
        .append('path')
        .attr('d', arcGenerator())
        .attr('fill', '#805b10')
        .attr('transform', 'translate(54,85)');
      break;
    case 'neutral':
      parentElement
        .append('rect')
        .attr('x', 30.5)
        .attr('y', 70)
        .attr('width', 40)
        .attr('height', 7)
        .attr('rx', 2)
        .attr('fill', '#805b10');
      break;
    case 'high':
      parentElement
        .append('path')
        .attr('d', arcGenerator())
        .attr('fill', '#805b10')
        .attr('transform', 'translate(54,65) rotate(180)');
      break;
    default:
      break;
  }
  return;
};

export default Mouth;
