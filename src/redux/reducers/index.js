import { combineReducers } from 'redux-immutable';
import authenticated from './authenticated';
import boards from './boards';
import currentBoard from './boards/current';
import columns from './columns';
import currentColumn from './columns/current';
import labels from './labels';
import members from './members';
import cards from './cards';
import currentCard from './cards/current';
import currentStep from './currentStep/index';
import success from './success/index';

const reducers = combineReducers({
  authenticated,
  boards,
  currentBoard,
  columns,
  currentColumn,
  labels,
  members,
  cards,
  currentCard,
  currentStep,
  success,
});

export default reducers;