/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import Queue from "../Tables/Queue.js";
import * as StateManager from "../../models/state.js";
import RatedTargetCard from "./RatedTargetCard.js";

const total = 100;

let memberList = [];

function RatingTable() {
    const table = document.createElement("table");
    table.className = "ratingTable";

    // populate the member list
    for (let i = 0; i < memberList.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${memberList[i]}</td>
            <td>0</td>
        `;
        table.appendChild(row);
    }

    return table;
}

function Rating(){
    
    const ratedTargets = StateManager.getTargets();    

    const card = document.createElement("div");
    card.className = "rating rankingBoard-cards";

    // The queue for rank targets
    card.appendChild(Queue(ratedTargets));

    // The rating data
    card.appendChild(RatedTargetCard());


    return card;
}

export default Rating;