/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// RankingSessionPresenter.js
import RankingBoard from '../views/Ranking/RankingBoard.js';
import RankingBoardPresenter from './RankingBoardPresenter.js';
import MemberBoardPresenter from './MemberBoardPresenter.js';
import * as StateManager from '../models/state.js';

class RankingSessionPresenter {
    constructor(rankingSessionView) {

        // Logic to link the presenter to the view
        this.view = rankingSessionView;
        this.view.setPresenter(this);

        // Logic to handle state changes
        this.initializeRankingBoard();
        this.initializeMemberBoard();
    }

    initializeRankingBoard() {
        console.log("RankingSessionPresenter.js: Initializing ranking board");
        // Logic to create and initialize child presenters and pass the relevant views
        // this.rankingBoardView = new RankingBoard();
        // this.rankingBoardPresenter = new RankingBoardPresenter(this.rankingBoardView);
        // redner the ranking board
        this.view.renderRankingBoard();
        // this.view.renderRankingBoard(this.rankingBoardView.getElement());
    }

    initializeMemberBoard() {
        console.log("RankingSessionPresenter.js: Initializing member board");
        // Logic to create and initialize child presenters and pass the relevant views

        // for member board
        // const memberBoardView = this.view.getMemberBoardView();
        // this.memberBoardPresenter = new MemberBoardPresenter(memberBoardView);
    }
}

export default RankingSessionPresenter;
