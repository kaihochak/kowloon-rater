/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// utilityActions.js
import * as ActionTypes from "../models/actionTypes.js";

// Action creator for submitting a rating
export function setSessionProgress(isInProgress) {
  return {
    type: ActionTypes.SET_SESSION_PROGRESS,
    payload: isInProgress,
  };
}