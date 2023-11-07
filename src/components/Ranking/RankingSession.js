/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import RankingBoard from "./RankingBoard.js";
import MemberBoard from "../Members/MemberBoard.js";

function RankingSession(formData) {

    // const session = {
    //     rankingName: formData.rankingName,
    //     memberNames: formData.memberNames,
    //     memberScores: [],
    // };

    const session = {
        rankingName: "Fruits",
        memberNames: ["Ching", "Kai", "A-A-Ron", "B. Ennis", "Rich Serg.", "ObMa", "T. $helby", "Mr. Perv"],
        memberScores: [],
    };

    const rankContainer = document.createElement("div");
    rankContainer.className = "rankContainer";
    
    // populate the title
    if (session.rankingName === "") session.rankingName = "ranking";

    // create the ranking board
    rankContainer.appendChild(RankingBoard(session));

    // populate the member list
    const memberContainer = document.createElement("div");
    memberContainer.className = "memberContainer";
    memberContainer.appendChild(MemberBoard(session));
    rankContainer.appendChild(memberContainer);

    return rankContainer;
}

export default RankingSession;