import PartialUser from "./PartialUser";
import Color from './Color';

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
    this.color = new Color(color);
    this.created_by = new PartialUser(created_by);
  }
}