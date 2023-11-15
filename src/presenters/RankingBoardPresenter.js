/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// RankingBoardPresenter.js
import * as RankingActions from '../actions/rankingActions.js';
import { dispatch } from '../models/state.js';
import * as StateManager from '../models/state.js';

class RankingBoardPresenter {
    constructor(rankingBoardView) {
        this.view = rankingBoardView;
        this.view.setPresenter(this);
        StateManager.registerListener(this.handleRatingStateChange, ['targets','currentTargetIndex','targetRatings']);
        StateManager.registerListener(this.handleRankingStateChange, []);
        StateManager.registerListener(this.handleTargetRatingDone, ['targetRatingDone']);
        this.initializeView();
    }

    initializeView() {
        // Fetch the initial data needed for the RankingBoard
        const ratedTargets = StateManager.getTargets();
        const currentTarget = StateManager.getCurrentTarget();
        const currentRating = StateManager.getCurrentTargetRating();

        // Initialization logic. Fetch data from StateManager if needed
        this.view.renderRatingSection(ratedTargets, currentTarget, currentRating);
        this.view.renderRankingSection();
    }

    handleRatingStateChange = () => {
        // console.log("RankingBoardPresenter handling rating state change");

        // Fetch the updated data needed for the RankingBoard
        const ratedTargets = StateManager.getTargets();
        const currentTarget = StateManager.getCurrentTarget();
        const currentRating = StateManager.getCurrentTargetRating();
        
        // Update the view with the new data
        this.view.renderRatingSection(ratedTargets, currentTarget, currentRating[0]);
    }

    handleRankingStateChange = () => {
        // console.log("RankingBoardPresenter handling ranking state change");

        // Fetch the updated data needed for the RankingBoard
        // const rankedTargets = StateManager.getRankedTargets();

        // Update the view with the new data
        this.view.renderRankingSection();
    }

    handleTargetRatingDone = (state) => {
        if (state.targetRatingDone) {
            this.view.highlightCurrentTarget();
        } else {
            this.view.nextTarget();
            // Fetch the updated data needed for the RankingBoard
            const ratedTargets = StateManager.getTargets();
            const currentTarget = StateManager.getCurrentTarget();
            const currentRating = StateManager.getCurrentTargetRating();

            console.log("ratedTargets:", ratedTargets);
            console.log("currentTarget:", currentTarget);
            console.log("currentRating:", currentRating);
            // Update the view with the new data
            this.view.renderRatingSection(ratedTargets, currentTarget, currentRating[0]);
        }
    }

    nextTarget() {
        dispatch(RankingActions.nextTarget());
    }
}

export default RankingBoardPresenter;
