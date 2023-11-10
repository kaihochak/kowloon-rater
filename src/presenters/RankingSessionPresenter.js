/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// RankingSessionPresenter.js
import RankingBoardPresenter from './RankingBoardPresenter.js';
import MemberBoardPresenter from './MemberBoardPresenter.js';
import * as StateManager from '../models/state.js';

class RankingSessionPresenter {
    constructor(rankingSessionView) {
        this.view = rankingSessionView;
        this.setupChildren();
    }

    setupChildren() {

        // Logic to create and initialize child presenters and pass the relevant views
        
        // for ranking board
        const rankingBoardView = this.view.getRankingBoardView();
        // this.rankingBoardPresenter = new RankingBoardPresenter(rankingBoardView);

        // for member board
        const memberBoardView = this.view.getMemberBoardView();
        this.memberBoardPresenter = new MemberBoardPresenter(memberBoardView);
    }
    // Other methods to handle logic...
}

export default RankingSessionPresenter;
