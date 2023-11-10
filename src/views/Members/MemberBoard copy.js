/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import MemberCard from "./MemberCard.js";
import * as StateManager from "../../models/state.js";

function CurrentRate() {

    const currentRate = document.createElement("div");
    currentRate.className = "currentRate";

    // Current rater
    const currentRater = document.createElement("div");
    currentRater.className = "currentRater";

    let firstMember = StateManager.getCurrentMemberName();

    currentRater.appendChild(MemberCard(firstMember));
    currentRate.appendChild(currentRater);

   // Current Rating
    let firstRating = 10;

    const currentRating = document.createElement("div");
    currentRating.className = "currentRating";
    currentRating.innerHTML = `
        <div class="input-container">
            <div></div>
            <input type="number" id="ratingInput" value="${firstRating}" min="0" max="100">
            <button id="submitRating">Next</button>
        </div>
        <input type="range" id="ratingSlider" value="${firstRating}" min="0" max="100">
    `;

    // Append the currentRating element to the DOM
    document.body.appendChild(currentRating);

    // event listeners to keep the input and slider in sync
    const ratingInput = document.getElementById("ratingInput");
    const ratingSlider = document.getElementById("ratingSlider");

    ratingInput.addEventListener("input", () => {
    const value = parseInt(ratingInput.value);
        ratingSlider.value = value;
    });

    ratingSlider.addEventListener("input", () => {
    const value = parseInt(ratingSlider.value);
        ratingInput.value = value;  
    });

    // Event listener for clicking the "Submit" button
    const submitButton = document.getElementById("submitRating");

    function submitRating() {
        const ratingInput = document.getElementById("ratingInput");
        const ratingValue = parseInt(ratingInput.value);
        
        // Handle the submitted rating value (you can replace this with your logic)
        console.log("Rating submitted:", ratingValue);
    }
    
    submitButton.addEventListener("click", submitRating);
    
    // Event listener for pressing Enter key in the input field
    ratingInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        submitRating();
    }});

    currentRate.appendChild(currentRating);

    return currentRate;
}

function MemberBoard() {
    
    const memberBoard = document.createElement("div");
    memberBoard.className = "memberBoard";
    
    // Current Rate
    memberBoard.appendChild(CurrentRate());

    // Waitlist Rater
    const memberNames = StateManager.getMemberNames();
    const waitlistRater = document.createElement("div");
    waitlistRater.className = "waitlistRater";
    for (let i = 1; i < memberNames.length; i++) {
        waitlistRater.appendChild(MemberCard(memberNames[i]));
    }

    memberBoard.appendChild(waitlistRater);
    return memberBoard;
}

export default MemberBoard;