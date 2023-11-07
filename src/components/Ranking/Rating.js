/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import Queue from "../Tables/Queue.js";

const rating = 68;
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


function Rating(ratedTarget, session){
    
    memberList = session.memberNames;

    const card = document.createElement("div");
    card.className = "rating rankingBoard-cards";

    // The queue for rank targets
    card.appendChild(Queue(ratedTarget));

    // The rating data
    const ratingData = document.createElement("div");
    ratingData.className = "ratingData";
    ratingData.innerHTML = `
        <div class="ratingDataValue">${rating}</div>
        <div class="ratingDataName">${ratedTarget[0]}</div>
    `;
    card.appendChild(ratingData);


    return card;
}

export default Rating;