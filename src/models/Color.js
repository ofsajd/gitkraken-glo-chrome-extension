export default class Color {
  constructor({
    red,
    green,
    blue,
    alpha
  } = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1
  }) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
}