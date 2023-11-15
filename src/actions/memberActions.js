/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// memberActions.js
import * as ActionTypes from "../models/actionTypes.js";

// Action creator for submitting a rating
export function submitRating(memberID, targetID, rating) {
  return {
    type: ActionTypes.SUBMIT_RATING,
    payload: { memberID, targetID, rating },
  };
}

// Action creator for adding a new member
export function addMember(name) {
  return {
    type: ActionTypes.ADD_MEMBER,
    payload: name,
  };
}

// Action creator for removing a member
export function removeMember(name) {
  return {
    type: ActionTypes.REMOVE_MEMBER,
    payload: name,
  };
}

// Action creator for updating a member's information
export function updateMember(oldName, newName) {
  return {
    type: ActionTypes.UPDATE_MEMBER,
    payload: { oldName, newName },
  };
}

// Action creator for showing the final rating
export function showFinalRating() {
  return {
    type: ActionTypes.SHOW_FINAL_RATING,
  };
}
