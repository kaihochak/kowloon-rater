import * as ActionTypes from './constants.js';

export function updateSessionProgress(isInProgress) {
  return {
    type: ActionTypes.UPDATE_SESSION_PROGRESS,
    payload: isInProgress,
  };
}

export function setRankingName(name) {
  return {
    type: ActionTypes.SET_RANKING_NAME,
    payload: name,
  };
}

// ... other action creators ...
