import * as ActionTypes from './constants.js';
import * as ActionCreators from './actions.js'; // Import all action creators

// Event to notify components of state changes
const stateChangeEvent = new Event('stateChange');

let state = {
  rankingName: "Fruits",
  memberNames: ["Ching", "Kai", "A-A-Ron", "B. Ennis", "Rich Serg.", "ObMa", "T. $helby", "Mr. Perv"],
  memberScores: new Map(),
  ratedTargets: [], 
  currentRaterIndex: 0, 
  currentTargetIndex: 0,
  isSessionInProgress: false,
};

// Function to update state
function dispatch(action) {
  switch (action.type) {
    case ActionTypes.UPDATE_SESSION_PROGRESS:
      state.isSessionInProgress = action.payload;
      break;
    case ActionTypes.SET_RANKING_NAME:
      state.rankingName = action.payload;
      break;
    // ... handle other actions
    default:
      break;
  }
  document.dispatchEvent(stateChangeEvent);
}

// Function to update the session progress
export function updateSessionProgress(isInProgress) {
  // Use the action creator to create the action object
  dispatch(ActionCreators.updateSessionProgress(isInProgress));
}

// Function to set the ranking name
export function setRankingName(name) {
  // Use the action creator to create the action object
  dispatch(ActionCreators.setRankingName(name));
}

// const StateManager = {
//   getState() {
//     return state;
//   },
//   setRankingName(name) {
//     state.rankingName = name;
//     document.dispatchEvent(stateChangeEvent);
//   },
//   addMember(name) {
//     state.memberNames.push(name);
//     document.dispatchEvent(stateChangeEvent);
//   },
//   addScore(memberName, target, score) {
//     if (!state.memberScores.has(memberName)) {
//       state.memberScores.set(memberName, new Map());
//     }
//     state.memberScores.get(memberName).set(target, score);
//     document.dispatchEvent(stateChangeEvent);
//   },
//   setNextRater() {
//     state.currentRaterIndex = (state.currentRaterIndex + 1) % state.memberNames.length;
//     document.dispatchEvent(stateChangeEvent);
//   },
//   setNextTarget() {
//     state.currentTargetIndex = (state.currentTargetIndex + 1) % state.ratedTargets.length;
//     document.dispatchEvent(stateChangeEvent);
//   },
//   addRatedTarget(targetName, score) {
//     state.ratedTargets.push({ name: targetName, score });
//     document.dispatchEvent(stateChangeEvent);
//   },
//   updateSessionInProgress(isSessionInProgress) {
//     state.isSessionInProgress = isSessionInProgress;
//     document.dispatchEvent(stateChangeEvent);
//   }
// };
