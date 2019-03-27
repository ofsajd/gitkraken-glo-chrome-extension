import PartialUser from "./PartialUser";

export default class Column {
  constructor({
    id,
    name,
    position,
    archived_date,
    created_date,
    created_by
  } = {
    id: null,
    name: '',
    position: 0,
    archived_date: '',
    created_date: '',
    created_by: ''
  }) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.archived_date = archived_date;
    this.created_date = created_date;
    this.created_by = new PartialUser(created_by);
  }
}