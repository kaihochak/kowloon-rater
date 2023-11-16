/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// rankingActions.js
import * as ActionTypes from "../models/actionTypes.js";

// Action creator for submitting a rating
export function nextTarget() {
  return {
    type: ActionTypes.SET_NEXT_TARGET,
  };
}

// Action creator for add one more item
export function addTarget(newItem) {
  return {
    type: ActionTypes.ADD_TARGET,
    payload: newItem,
  };
}

// Action creator for end the session
export function endSession() {
  return {
    type: ActionTypes.END_SESSION,
  };
}