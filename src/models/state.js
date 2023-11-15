import * as ActionTypes from './actionTypes.js';
import * as UtilityActionCreators from '../actions/utilityActions.js';
import * as RankingActionCreators from '../actions/rankingActions.js';
import getChangedParts from '../utils/checkChanges.js';

let state = {
  rankingName: "Fruits",
  memberNames: ["Ching", "Kai", "A-A-Ron", "B. Ennis", "Rich Serg.", "ObMa", "T. $helby", "Mr. Perv"],
  targets: ["Apple", "Banana", "Orange", "Pear", "Pineapple", "Strawberry", "Watermelon", "Grape"],
  targetRatings: new Map(),
  sortedRankings: [],
  currentTargetIndex: 0,
  targetRatingDone: false,
  isSessionInProgress: false,
};

let oldState = { ...state };

let listeners = [];

export function registerListener(listener, subscribedParts) {
  if (Array.isArray(subscribedParts)) {
    listeners.push({ listener, subscribedParts });
  } else {
    console.error('subscribedParts must be an array');
  }
}


function reducer(state, action) {
  switch (action.type) {

    // member submitting a rating for a target
    case ActionTypes.SUBMIT_RATING:
      // Update the rating for the current target
      const { rating, targetID } = action.payload;

      // Create a new Map from the current state's targetRatings
      const newTargetRatings = new Map(state.targetRatings);

      if (!newTargetRatings.has(targetID)) {
        newTargetRatings.set(targetID, [parseFloat(rating), 1]);  // [averageRating, count]
      } else {
        const [oldAvg, oldCount] = newTargetRatings.get(targetID);
        const newCount = oldCount + 1;
        const newAvg = (oldAvg * oldCount + parseFloat(rating)) / newCount;
        newTargetRatings.set(targetID, [newAvg, newCount]);
      }

      // Return a new state object with the updated targetRatings
      return {
        ...state,
        targetRatings: newTargetRatings
      };

    case ActionTypes.SHOW_FINAL_RATING:
      // Return a new state object with the updated targetRatingDone
      return {
        ...state,
        targetRatingDone: true
      };

    case ActionTypes.SET_NEXT_TARGET:
      return {
        ...state,
        targetRatingDone: false,
        currentTargetIndex: state.currentTargetIndex + 1,
        sortedRankings: updatedSortedRankings(),
      };

    case ActionTypes.SET_SESSION_PROGRESS:
      return { isSessionInProgress: action.payload };

    case ActionTypes.SET_RANKING_NAME:
      return { rankingName: action.payload };

    default:
      return state;
  }
}

function updatedSortedRankings() {
  state.sortedTargets = Array.from(state.targetRatings)
    .map(([target, [average]]) => ({
      target: state.targets[target],
      averageRating: average 
    }))
    .sort((a, b) => b.averageRating - a.averageRating);

  return state.sortedTargets;
}

// Dispatch function to update state using the reducer and then notify any listeners
export function dispatch(action) {
  const newState = reducer(state, action);

  if (newState !== state) {
    let changedParts = getChangedParts(newState, oldState);
    oldState = newState;
    state = newState;
    // console.log("State changed:", changedParts);
    notifyListeners(changedParts);
  }
}

function notifyListeners(changedParts) {
  // Notify all listeners that are subscribed to the changed parts
  listeners.forEach(({ listener, subscribedParts }) => {
    // If the listener is subscribed to any of the changed parts, notify it
    if (shouldNotify(subscribedParts, changedParts)) {
      listener(state);
    }
  });
}

function shouldNotify(subscribedParts, changedParts) {
  if (!subscribedParts || !changedParts) {
    console.error("subscribedParts and changedParts must be defined");
    return false;
  }
  return changedParts.some(part => subscribedParts.includes(part));
}


// Getters and Setters
export function getRankingName() {
  return state.rankingName;
}

export function getMemberName(index) {
  return state.memberNames[index];
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

export function getRankedTargets() {
  return state.sortedRankings;
}