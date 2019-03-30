export default class Color {
  constructor({
    r,
    g,
    b,
    a
  } = {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  }) {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;
  }

  get rgba(){
    console.log(this);
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
  }
}