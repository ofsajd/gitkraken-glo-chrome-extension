import PartialUser from "./PartialUser";

export default class Description{
  constructor({text, created_date, updated_date, created_by, updated_by} = {text: '', created_date: '', updated_date: '', created_by: '', updated_by: ''}){
    this.text = text;
    this.created_by = new PartialUser(created_by);
    this.created_date = created_date;
    this.updated_date = updated_date;
    this.updated_by = new PartialUser(updated_by);
  }
}