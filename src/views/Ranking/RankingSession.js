/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// RankingSession.js
import RankingBoard from "./RankingBoard.js";
import MemberBoard from "../Members/MemberBoard.js";
import RankingSessionPresenter from "./RankingSessionPresenter.js";

class RankingSession {
    constructor() {
        this.presenter = new RankingSessionPresenter(this);
    }

    createRankContainer() {
        const rankingName = StateManager.getRankingName() || "ranking"; // Default ranking name if empty
        const rankContainer = document.createElement("div");
        rankContainer.className = "rankContainer";
        
        // ranking board
        rankContainer.appendChild(RankingBoard());

        // member board
        const memberBoardView = new MemberBoard(); // Create the MemberBoard view
        const memberBoardPresenter = new MemberBoardPresenter(memberBoardView); // Create the MemberBoardPresenter
        memberBoardView.setPresenter(memberBoardPresenter); // Set the presenter on the view

        const memberContainer = document.createElement("div");
        memberContainer.className = "memberContainer";
        memberContainer.appendChild(memberBoardView.memberBoard); // Append the memberBoard to the memberContainer
        rankContainer.appendChild(memberContainer);

        return rankContainer;
    }

    // Method to append the rankContainer to a container
    render(container) {
        container.appendChild(this.rankContainer);
    }
}

export default RankingSession;
