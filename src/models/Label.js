import PartialUser from "./PartialUser";

export default class Label {
  constructor({
    id,
    name,
    color,
    created_by
  } = {
    id: null,
    name: '',
    color: color,
    created_by: created_by
  }) {
    this.id = id;
    this.name = name;
    this.color = new color(color);
    this.created_by = new PartialUser(created_by);
  }
}