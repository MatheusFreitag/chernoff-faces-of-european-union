import * as d3 from 'd3';

const Eyebrows = (parentElement, mode) => {
  // Left Eyebrow
  const leftEyebrow = parentElement
    .append('rect')
    .attr('x', 24)
    .attr('y', 20)
    .attr('width', 20)
    .attr('height', 3)
    .attr('rx', 2)
    .attr('fill', '#805b10');
  const coordX1leftEyebrow = +leftEyebrow.attr('x');
  const widthleftEyebrow = +leftEyebrow.attr('width');
  const midXleftEyebrow = coordX1leftEyebrow + widthleftEyebrow / 2;
  const coordY1leftEyebrow = +leftEyebrow.attr('y');
  const heightleftEyebrow = +leftEyebrow.attr('height');
  const midYleftEyebrow = coordY1leftEyebrow + heightleftEyebrow / 2;

  // Right Eyebrow
  const rightEyebrow = parentElement
    .append('rect')
    .attr('x', 64)
    .attr('y', 20)
    .attr('width', 20)
    .attr('height', 3)
    .attr('rx', 2)
    .attr('fill', '#805b10');
  const coordX1rightEyebrow = +rightEyebrow.attr('x');
  const widthrightEyebrow = +rightEyebrow.attr('width');
  const midXrightEyebrow = coordX1rightEyebrow + widthrightEyebrow / 2;
  const coordY1rightEyebrow = +rightEyebrow.attr('y');
  const heightrightEyebrow = +rightEyebrow.attr('height');
  const midYrightEyebrow = coordY1rightEyebrow + heightrightEyebrow / 2;

  switch (mode) {
    case 'low':
      leftEyebrow.attr(
        'transform',
        `rotate(-30, ${midXleftEyebrow}, ${midYleftEyebrow})`
      );
      rightEyebrow.attr(
        'transform',
        `rotate(30, ${midXrightEyebrow}, ${midYrightEyebrow})`
      );
      break;
    case 'neutral':
      break;
    case 'high':
      leftEyebrow.attr(
        'transform',
        `rotate(30, ${midXleftEyebrow}, ${midYleftEyebrow})`
      );
      rightEyebrow.attr(
        'transform',
        `rotate(-30, ${midXrightEyebrow}, ${midYrightEyebrow})`
      );

      break;
    default:
      throw new Error(
        '`mode` property in Body component should be one of ["low", "neutral", "high"]'
      );
  }
  return;
};

export default Eyebrows;
