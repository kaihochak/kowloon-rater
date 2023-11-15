/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// RatedTargetCard.js
function RatedTargetCard(currentRating, currentTarget) {

    const ratingData = document.createElement("div");
    ratingData.className = "ratingData";
    ratingData.innerHTML = `
        <div class="ratingDataValue">${currentRating}</div>
        <div class="ratingDataName">${currentTarget}</div>
    `;

    return ratingData;
}    

export default RatedTargetCard;