import * as d3 from 'd3';

const Neck = (parentElement, mode) => {
  const arc = d3
    .arc()
    .innerRadius(34)
    .outerRadius(37)
    .cornerRadius(5)
    .startAngle((3 * Math.PI) / 4)
    .endAngle((5 * Math.PI) / 4);

  switch (mode) {
    case 'low':
      break;
    case 'high':
      parentElement
        .append('path')
        .attr('class', 'arc')
        .attr('d', arc)
        .attr('transform', 'translate(54,65)')
        .attr('fill', '#805b10');
      break;
    default:
      throw new Error(
        '`mode` property in Body component should be one of ["low", "neutral", "high"]'
      );
  }
  return;
};

export default Neck;
