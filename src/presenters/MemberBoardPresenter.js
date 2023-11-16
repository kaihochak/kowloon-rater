/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
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
        this.memberNames = StateManager.getMemberNames();
        this.currentMemberName = StateManager.getMemberName(0);
        this.currentMemberIndex = 0;
        this.currentTargetID = StateManager.getCurrentTargetID();
        StateManager.registerListener(this.handleTargetRatingDone, ['targetRatingDone']);
        StateManager.registerListener(this.handleIsSessionInProgressChange, ['isSessionInProgress']);
        this.initializeView();
    }

    initializeView() {
        // Fetch the initial data needed for the MemberBoard
        const firstMember = StateManager.getMemberName(this.currentMemberIndex);
        const memberNames = StateManager.getMemberNames();

        // Logic to create and initialize child presenters and pass the relevant views
        this.view.render(firstMember, memberNames, this.currentMemberIndex);
        this.view.attachEventListeners();
    }

    setCurrentMemberName(name) {
        this.currentMemberName = name;
        // Update the view with the new current member name
        this.view.updateCurrentRater(this.currentMemberName);
    }

    submitRating(ratingValue) {
        // Dispatch an action to submit the rating
        dispatch(MemberActions.submitRating(this.currentMemberIndex, StateManager.getCurrentTargetID(), parseFloat(ratingValue)));

        // Update the view with the new current member name
        if (this.currentMemberIndex+1 < this.memberNames.length) {
            this.currentMemberIndex++;
        }
        // if everyone is done rating, show the final rating and pause member board
        else {
            this.currentMemberIndex = 0;
            dispatch(MemberActions.showFinalRating());
        }
        this.view.updateCurrentRater(StateManager.getMemberName(this.currentMemberIndex));

        // Update the view with the new wailist member names
        this.view.updateWaitlistRaters(this.memberNames, this.currentMemberIndex);
    }

    handleTargetRatingDone = (state) => {
        if (state.targetRatingDone) {
            this.view.disableRating();
        } else {
            this.view.enableRating();
        }
    }

    handleIsSessionInProgressChange = () => {
        this.view.disableRating();
    }
}

export default MemberBoardPresenter;
