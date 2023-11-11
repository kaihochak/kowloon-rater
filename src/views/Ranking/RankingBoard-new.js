/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import Rating from "./Rating.js";
import Ranking from "../Tables/Ranking.js";
import Queue from "../Tables/Queue.js";

class RankingBoard {
    constructor(){
        this.rankingBoardElement = this.createRankingBoardElement();
    }

    createRankingBoardElement() {
        const rankingBoard = document.createElement("div");
        rankingBoard.className = "rankingBoard";
        return rankingBoard;
    }

    setPresenter(presenter) {
        this.presenter = presenter;
        // this.attachEventListeners();
    }

    renderRating(element) {
        // The rating data
        this.rankingBoardElement.appendChild(Rating());
    }

    renderRanking(element) {
        // The ranking data 
        this.rankingBoardElement.appendChild(Ranking());
    }
}

export default RankingBoard;