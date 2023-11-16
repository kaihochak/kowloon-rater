/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// utilityActions.js
import * as ActionTypes from "../models/actionTypes.js";

// Action creator for Create a Form
export function goToCreate() {
  console.log("AAA");
  return {
    type: ActionTypes.GO_TO_CREATE,
  };
}

// Action creator for Create a Ranking Session
export function goToRanking() {
  return {
    type: ActionTypes.GO_TO_RANKING,
  };
}