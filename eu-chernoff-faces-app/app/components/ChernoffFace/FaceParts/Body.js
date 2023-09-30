import * as d3 from 'd3';

const Body = (parentElement, mode) => {
  // Paleta: https://coolors.co/palette/fff75e-fff056-ffe94e-ffe246-ffda3d-ffd53e-fecf3e-fdc43f-fdbe39-fdb833
  switch (mode) {
    case 'low':
      parentElement
        .append('circle')
        .style('stroke', '#805b10')
        .style('stroke-width', '4')
        .style('fill', '#FFE570')
        .attr('cx', 54)
        .attr('cy', 54)
        .attr('r', 50);
      break;
    case 'neutral':
      parentElement
        .append('circle')
        .style('stroke', '#805b10')
        .style('stroke-width', '4')
        .style('fill', '#FFD61F')
        .attr('cx', 54)
        .attr('cy', 54)
        .attr('r', 50);
      break;
    case 'high':
      parentElement
        .append('circle')
        .style('stroke', '#805b10')
        .style('stroke-width', '4')
        .style('fill', '#CCA700')
        .attr('cx', 54)
        .attr('cy', 54)
        .attr('r', 50);
      break;
    default:
      throw new Error(
        '`mode` property in Body component should be one of ["low", "neutral", "high"]'
      );
  }
  return;
};

export default Body;
