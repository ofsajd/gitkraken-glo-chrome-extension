export default class Attachment {
  constructor({
    id,
    filename,
    mime_type
  } = {
    id: null,
    filename: '',
    mime_type: ''
  }) {
    this.id = id;
    this.filename = filename;
    this.mime_type = mime_type;
  }
}