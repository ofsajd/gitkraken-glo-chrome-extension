import PartialUser from './PartialUser';

export default class Comment {
  constructor({
    id,
    card_id,
    board_id,
    created_date,
    updated_date,
    created_by,
    updated_by,
    text
  } = {
    id: null,
    card_id: null,
    board_id: null,
    created_date: '',
    updated_date: '',
    created_by: '',
    updated_by: '',
    text: ''
  }) {
    this.id = id;
    this.card_id = card_id;
    this.board_id = board_id;
    this.created_date = created_date;
    this.updated_date = updated_date;
    this.created_by = new PartialUser(created_by);
    this.updated_by = new PartialUser(updated_by);
    this.text = text;
  }
}