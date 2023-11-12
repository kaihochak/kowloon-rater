/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// MemberBoardPresenter.js
import * as MemberActions from '../actions/memberActions.js';
import { dispatch } from '../models/state.js';
import * as StateManager from '../models/state.js';

class MemberBoardPresenter {
    constructor(MemberBoardView) {
        // Logic to link the presenter to the view
        this.view = MemberBoardView;
        this.view.setPresenter(this);
        this.initializeView();
        this.currentMemberName = StateManager.getCurrentMemberName();
        this.currentMemberID = StateManager.getCurrentMemberID();
        this.currentTargetID = StateManager.getCurrentTargetID();
    }

    initializeView() {
        // Fetch the initial data needed for the MemberBoard
        const firstMember = StateManager.getCurrentMemberName();
        const memberNames = StateManager.getMemberNames();

        // Logic to create and initialize child presenters and pass the relevant views
        this.view.render(firstMember, memberNames);
        this.view.attachEventListeners();
    }

    setCurrentMemberName(name) {
        this.currentMemberName = name;
        // Update the view with the new current member name
        this.view.updateCurrentRater(this.currentMemberName);
    }

    handleRatingChange(value) {
        // Logic to handle a change in the rating input
        console.log("Rating changed to:", value);
        // Update the state or handle the change as needed
    }

    handleSubmitRating(ratingValue) {
        console.log("Rating submitted for", this.currentMemberName, ":", ratingValue);
        // Dispatch an action to submit the rating
        dispatch(MemberActions.submitRating(this.currentMemberID, this.currentTargetID, ratingValue));
    }

}

export default MemberBoardPresenter;
