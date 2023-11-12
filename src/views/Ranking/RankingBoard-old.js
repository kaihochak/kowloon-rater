/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import Rating from "./Rating.js";
import Ranking from "../../utils/Tables/Ranking.js";


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