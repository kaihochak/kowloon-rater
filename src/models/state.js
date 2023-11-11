import * as ActionTypes from './actionTypes.js';
import * as UtilityActionCreators from '../actions/utilityActions.js';
import * as RankingActionCreators from '../actions/rankingActions.js';
// Event to notify components of state changes
const stateChangeEvent = new Event('stateChange');

let state = {
  rankingName: "Fruits",
  memberNames: ["Ching", "Kai", "A-A-Ron", "B. Ennis", "Rich Serg.", "ObMa", "T. $helby", "Mr. Perv"],
  targets: ["Apple", "Banana", "Orange", "Pear", "Pineapple", "Strawberry", "Watermelon", "Grape"], 
  targetRatings: new Map(),
  currentTargetIndex: 0,
  currentRaterIndex: 0, 
  isSessionInProgress: false,
};

function reducer(state, action) {
  switch (action.type) {
    // 
    case 'increment':
      return { count: state.count + 1 };
    case ActionTypes.SET_SESSION_PROGRESS:
      return { isSessionInProgress: action.payload };
    case ActionTypes.SET_RANKING_NAME:
      return { rankingName: action.payload };
    default:
      return state;
  }

}

// Dispatch function to update state using the reducer and then notify any listeners
export function dispatch(action) {
  const newState = reducer(state, action);
  if (newState !== state) {
    state = newState;
    document.dispatchEvent(stateChangeEvent);
    render(); // This assumes you have a render function that updates the UI
  }
}

// Render function to update the UI
function render() {
  // Update the UI
}


// Getters and Setters

export function getRankingName() {
  return state.rankingName;
}

export function getCurrentMemberName() {
  return state.memberNames[state.currentRaterIndex];
}

export function getMemberNames() {
  return state.memberNames;
}

export function getCurrentTarget() {
  return state.targets[state.currentTargetIndex];
}

export function getTargets() {
  return state.targets;
}

export function getCurrentTargetRating() {
  return state.targetRatings.get(state.currentTargetIndex) || "-";
}

export function getTargetRating(targetIndex) {
  return state.targetRatings.get(targetIndex) || "-";
}

export function setSessionProgress(isInProgress) {
  dispatch(UtilityActionCreators.setSessionProgress(isInProgress));
}

export function getSessionProgress() {
  return state.isSessionInProgress;
}

export function setRankingName(name) {
  dispatch(RankingActionCreators.setRankingName(name));
}
