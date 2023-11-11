/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// RankingSession.js
import RankingBoard from "./RankingBoard.js";
import MemberBoard from "../Members/MemberBoard.js";
import * as StateManager from "../../models/state.js";

class RankingSession {
    constructor() {
        this.rankingSessionElement = this.createRankingSessionElement();
    }

    createRankingSessionElement() {
        // const rankingName = StateManager.getRankingName() || "ranking"; // Default ranking name if empty
        const rankContainer = document.createElement("div");
        rankContainer.className = "rankContainer";
        return rankContainer;
    }

    setPresenter(presenter) {
        this.presenter = presenter;
        // this.attachEventListeners();
    }

    getElement() {
        return this.rankingSessionElement;
    }

    renderRankingBoard(element) {
        this.rankingSessionElement.appendChild(RankingBoard());
    }

    renderMemberBoard(element) {
        const memberContainer = document.createElement("div");
        memberContainer.className = "memberContainer";
        memberContainer.appendChild(MemberBoard());
        this.rankingSessionElement.appendChild(memberContainer);
    }
}

export default RankingSession;
