import React, { useEffect, useRef } from 'react';

const RadarChart = ({ id, sideLength, names, values, backgroundColor, valueColor }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const hexagon = {
      bg_default_color: backgroundColor || '#99ccff',
      value_default_color: valueColor || '#ffff99',
      x_offset: 30,
      ssin: function (degree) {
        return Math.sin(degree * Math.PI / 180);
      },
      init: function (id, side_length, names, color) {
        this.side_length = side_length;
        this.hexagon = document.getElementById(id);
        this.hexagon.width = this.side_length * 2 * this.ssin(60) + this.x_offset * 2;
        this.hexagon.height = this.side_length * 2;

        if (typeof (color) === 'undefined') {
          color = this.bg_default_color;
        }

        const hexagoncontext = this.hexagon.getContext('2d');
        hexagoncontext.fillStyle = color;
        hexagoncontext.strokeStyle = color;
        hexagoncontext.beginPath();
        hexagoncontext.moveTo(this.hexagon.width / 2, 0);
        hexagoncontext.lineTo(this.hexagon.width - this.x_offset, this.hexagon.height / 4);
        hexagoncontext.lineTo(this.hexagon.width - this.x_offset, this.hexagon.height * 3 / 4);
        hexagoncontext.lineTo(this.hexagon.width / 2, this.hexagon.height);
        hexagoncontext.lineTo(this.x_offset, this.hexagon.height * 3 / 4);
        hexagoncontext.lineTo(this.x_offset, this.hexagon.height / 4);
        hexagoncontext.lineTo(this.hexagon.width / 2, 0);
        hexagoncontext.stroke();
        hexagoncontext.fill();

        hexagoncontext.fillStyle = 'black';
        hexagoncontext.font = '12px Arial';
        hexagoncontext.fillText(names[0], this.hexagon.width / 2 + this.x_offset / 2, 15);
        hexagoncontext.fillText(names[1], this.hexagon.width - this.x_offset, this.hexagon.height / 4);
        hexagoncontext.fillText(names[2], this.hexagon.width - this.x_offset, this.hexagon.height * 3 / 4);
        hexagoncontext.fillText(names[3], this.hexagon.width / 2 + this.x_offset / 2, this.hexagon.height);
        hexagoncontext.fillText(names[4], this.x_offset, this.hexagon.height * 3 / 4);
        hexagoncontext.fillText(names[5], this.x_offset, this.hexagon.height / 4);
      },
      draw: function (values, color) {
        if (values.length < 6) {
          return false;
        }

        for (let i in values) {
          values[i] = parseFloat(values[i]);

          if (values[i] > 1) {
            values[i] = 1;
          }

          if (values[i] < 0) {
            values[i] = 0;
          }
        }

        const hexagoncontext = this.hexagon.getContext('2d');
        hexagoncontext.fillStyle = color;
        hexagoncontext.strokeStyle = color;
        hexagoncontext.beginPath();
        const width = this.hexagon.width;
        const L = this.side_length;
        const S = this.x_offset;
        const V = values;

        hexagoncontext.moveTo(width / 2, L * (1 - V[0]));
        hexagoncontext.lineTo(this.ssin(60) * L * (1 + V[1]) + S, (1 - V[1] / 2) * L);
        hexagoncontext.lineTo(this.ssin(60) * L * (1 + V[2]) + S, (1 + V[2] / 2) * L);
        hexagoncontext.lineTo(width / 2, (1 + V[3]) * L);
        hexagoncontext.lineTo(this.ssin(60) * L * (1 - V[4]) + S, (1 + V[4] / 2) * L);
        hexagoncontext.lineTo(this.ssin(60) * L * (1 - V[5]) + S, (1 - V[5] / 2) * L);
        hexagoncontext.lineTo(width / 2, L * (1 - V[0]));
        hexagoncontext.stroke();
        hexagoncontext.fill();
      },
    };

    hexagon.init(id, sideLength, names, hexagon.bg_default_color);
    hexagon.draw(values, hexagon.value_default_color);
  }, [id, sideLength, names, values, backgroundColor, valueColor]);

  return <canvas ref={canvasRef} id={id} />;
};

export default RadarChart;
