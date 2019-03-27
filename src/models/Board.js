export default class Board {
  constructor({
    id,
    name,
    labels,
    members,
    columns,
  } = {
    id: null,
    name: '',
    labels: [],
    members: [],
    columns: []
  }) {
    this.id = id;
    this.name = name;
    this.labels = labels;
    this.members = members;
    this.columns = columns;
  }
}