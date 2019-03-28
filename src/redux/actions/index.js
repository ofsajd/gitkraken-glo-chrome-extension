import { createAction } from 'redux-actions';
import actions from './../../enum/actions';

export const login = createAction(actions.LOGIN);
export const logout = createAction(actions.LOGOUT);

export const setBoards = createAction(actions.SET_BOARDS);
export const addSingleBoard = createAction(actions.ADD_SINGLE_BOARD);
export const removeSingleBoard = createAction(actions.REMOVE_SINGLE_BOARD);

export const setCurrentBoard = createAction(actions.SET_CURRENT_BOARD);

export const setColumns = createAction(actions.SET_COLUMNS);
export const setCurrentColumn = createAction(actions.SET_CURRENT_COLUMN);

export const setCards = createAction(actions.SET_CARDS);
export const setCurrentCard = createAction(actions.SET_CURRENT_CARD);

export const setLabels = createAction(actions.SET_LABELS);

export const setMembers = createAction(actions.SET_MEMBERS);

export * from './Token';
export * from './Boards';
export * from './Cards';
export * from './Comments';
export * from './Attachments';