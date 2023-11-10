// MemberPresenter.js
import * as MemberActions from './memberActions.js';
import { dispatch } from '../models/state.js';
import MemberBoard from '../views/Members/MemberBoard.js';

class MemberPresenter {

    constructor() {
        this.view = new MemberBoard();
        document.addEventListener('stateChange', this.handleStateChange);
    }

    handleStateChange = () => {
        const newState = getState();
        this.view.render(newState);
    }

    // Method to handle submitting a rating
    submitRating(memberName, target, rating) {
        // Dispatch an action to submit the rating
        dispatch(MemberActions.submitRating(memberName, target, rating));
        // Update the rating board
        this.updateRatingBoard(target, rating);
    }

    // Method to update the RatingBoard
    updateRatingBoard(target, rating) {
        // trigger the RatingBoard to update 
        // via a callback, an event, or by directly invoking a method

    }


    // Method to handle adding a member
    addMember(name) {
        // Dispatch an action to add a member
        dispatch(MemberActions.addMember(name));
    }

    // Method to handle removing a member
    removeMember(name) {
        // Dispatch an action to remove a member
        dispatch(MemberActions.removeMember(name));
    }

    // Method to handle updating a member
    updateMember(oldName, newName) {
        // Dispatch an action to update a member
        dispatch(MemberActions.updateMember(oldName, newName));
    }

}

export default MemberPresenter;
