/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// RankingSessionPresenter.js
import RankingBoard from '../views/Ranking/RankingBoard.js';
import RankingBoardPresenter from './RankingBoardPresenter.js';
import MemberBoard from '../views/Members/MemberBoard.js';
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
        // create rankingBoard and rankingBoardPresenter
        // this.rankingBoardView = new RankingBoard();
        // this.rankingBoardPresenter = new RankingBoardPresenter(this.rankingBoardView);
        // render the ranking board
        this.view.renderRankingBoard();
        // this.view.renderRankingBoard(this.rankingBoardView.getElement());
    }

    initializeMemberBoard() {
        console.log("RankingSessionPresenter.js: Initializing member board");
        // create memberBoard and memberBoardPresenter
        this.memberBoardView = new MemberBoard();
        this.memberBoardPresenter = new MemberBoardPresenter(this.memberBoardView);
        // render the member board
        this.view.renderMemberBoard(this.memberBoardView.getElement());
    }
}

export default RankingSessionPresenter;
