import * as ActionTypes from './actionTypes.js';
import * as UtilityActionCreators from '../actions/utilityActions.js';
import * as RankingActionCreators from '../actions/rankingActions.js';

let state = {
  rankingName: "Fruits",
  memberNames: ["Ching", "Kai", "A-A-Ron", "B. Ennis", "Rich Serg.", "ObMa", "T. $helby", "Mr. Perv"],
  targets: ["Apple", "Banana", "Orange", "Pear", "Pineapple", "Strawberry", "Watermelon", "Grape"], 
  targetRatings: new Map(),
  currentTargetIndex: 0,
  currentRaterIndex: 0, 
  isSessionInProgress: false,
};

let listeners = [];

export function registerListener(listener) {
    listeners.push(listener);
}

function reducer(state, action) {
  switch (action.type) {
    
    // member submitting a rating for a target
    case  ActionTypes.SUBMIT_RATING:
      // Update the rating for the current target
      const { rating, targetID } = action.payload;
      
      // Create a new Map from the current state's targetRatings
      const newTargetRatings = new Map(state.targetRatings);

      if (!newTargetRatings.has(targetID)) {
          newTargetRatings.set(targetID, [rating, 1]);  // [averageRating, count]
      } else {
          const [oldAvg, oldCount] = newTargetRatings.get(targetID);
          const newCount = oldCount + 1;
          const newAvg = (oldAvg * oldCount + rating) / newCount;
          newTargetRatings.set(targetID, [newAvg, newCount]);
      }

      // Return a new state object with the updated targetRatings
      return {
          ...state,
          targetRatings: newTargetRatings
      };

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
  const oldState = { ...state }; // Make a copy of the current state
  const newState = reducer(state, action);

  if (newState !== oldState) {
      state = newState;
      document.dispatchEvent(new Event('stateChange'));
      listeners.forEach(listener => listener(state));
  }
}




// Getters and Setters
export function getRankingName() {
  return state.rankingName;
}

export function getCurrentMemberName() {
  return state.memberNames[state.currentRaterIndex];
}

export function getCurrentMemberID() {
  return state.currentRaterIndex;
}

export function getMemberNames() {
  return state.memberNames;
}

export function getCurrentTargetID() {
  return state.currentTargetIndex;
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
