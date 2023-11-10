/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import RankingBoard from "./RankingBoard.js";
import MemberBoard from "../Members/MemberBoard.js";
import * as StateManager from "../../models/state.js";

function RankingSession() {

    const rankingName = StateManager.getRankingName();

    const rankContainer = document.createElement("div");
    rankContainer.className = "rankContainer";
    
    // title
    if (rankingName === "") rankingName = "ranking";

    // ranking board
    rankContainer.appendChild(RankingBoard());

    // member board
    const memberContainer = document.createElement("div");
    memberContainer.className = "memberContainer";
    memberContainer.appendChild(MemberBoard());
    rankContainer.appendChild(memberContainer);

    return rankContainer;
}

export default RankingSession;