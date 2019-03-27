export default class User {
  constructor({
    id,
    role,
    username
  } = {
    id: null,
    role: '',
    username: ''
  }) {
    this.id = id;
    this.role = role;
    this.username = username;
  }
}