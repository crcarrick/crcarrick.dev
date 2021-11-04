import _ from 'lodash';

const clamp = (num) => _.clamp(num, 0, 255);

const adjust = (color, amount) => {
  const num = parseInt(color.replace('#', ''), 16);

  let r = clamp((num >> 16) + amount);
  let g = clamp((num & 0x0000ff) + amount);
  let b = clamp(((num >> 8) & 0x00ff) + amount);

  return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
};

export class Color {
  static from(hex) {
    return new Color(hex);
  }

  constructor(hex) {
    this.color = hex;
  }

  darken(percent) {
    return Color.from(adjust(this.color, -percent));
  }

  lighten(percent) {
    return Color.from(adjust(this.color, percent));
  }

  toRgba(opacity = 1) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.color);

    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);

      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    return null;
  }

  toString() {
    return this.color;
  }
}
