/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import Queue from "../Tables/Queue.js";
import RatingDataCard from "./RatingDataCard.js";
import Ranking from "../Tables/Ranking.js";


const queueData = ["cherry", "blackberry", "kiwi", "papaya"];

function RankingBoard(session) {
    const board = document.createElement("div");
    board.className = "rankingBoard";
    
    // The queue for rank targets
    // board.appendChild(Queue(queueData));

    // The rating data
    board.appendChild(RatingDataCard(queueData,session));

    // The ranking data 
    board.appendChild(Ranking());

    return board;
}

export default RankingBoard;