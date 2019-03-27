import PartialUser from "./PartialUser";
import Description from './Description';

export default class Card{
  constructor({
    id,
    name,
    position,
    description,
    board_id,
    column_id,
    created_date,
    updated_date,
    archived_date,
    assignees,
    labels,
    due_date,
    attachment_count,
    completed_task_count,
    created_by,
  } = {
    id: null,
    name: '',
    position: 0,
    description: {},
    board_id: null,
    column_id: null,
    created_by: {},
    created_date: '',
    archived_date: '',
    updated_date: '',
    assignees: [],
    labels: [],
    due_date: '',
    attachment_count: 0,
    completed_task_count: 0,
  }){
    this.id = id;
    this.name = name;
    this.position = position;
    this.description = new Description(description);
    this.board_id = board_id;
    this.column_id = column_id;
    this.created_by = new PartialUser(created_by);
    this.created_date = created_date;
    this.updated_date = updated_date;
    this.archived_date = archived_date;
    this.assignees = assignees;
    this.labels = labels;
    this.due_date = due_date;
    this.attachment_count = attachment_count;
    this.completed_task_count = completed_task_count;
  }
}