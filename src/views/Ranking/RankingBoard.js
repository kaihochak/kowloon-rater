/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import Queue from "../Tables/Queue.js";
import Rating from "./Rating.js";
import Ranking from "../Tables/Ranking.js";

function RankingBoard() {
    const board = document.createElement("div");
    board.className = "rankingBoard";

    // The rating data
    board.appendChild(Rating());

    // The ranking data 
    board.appendChild(Ranking());

    return board;
}

export default RankingBoard;