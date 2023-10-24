/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

function RatedTargetCard(rankTarget) {
    const card = document.createElement("div");
    card.className = "ratedTargetCard";
    card.innerHTML = `
        <div class="ratedTargetName">${rankTarget}</div>
    `;

    return card;
}

export default RatedTargetCard;