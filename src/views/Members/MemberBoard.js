/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

/* MemberBoard.js */
import MemberCard from "./MemberCard.js";
import * as StateManager from "../../models/state.js";

class MemberBoard {
  constructor() {
    this.memberBoardElement = this.createMemberBoardElement();
  }

  setPresenter(presenter) {
    this.presenter = presenter;
    // this.attachEventListeners();
  }

  getElement() {
    return this.memberBoardElement;
  }

  createMemberBoardElement() {
    const memberBoard = document.createElement("div");
    memberBoard.className = "memberBoard";
    return memberBoard;
  }

  createCurrentRateSection() {

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
      }
    });

    currentRate.appendChild(currentRating);
    return currentRate;
  }

  createWaitlistRaterSection() {
    const memberNames = StateManager.getMemberNames();
    const waitlistRater = document.createElement("div");
    waitlistRater.className = "waitlistRater";
    for (let i = 1; i < memberNames.length; i++) {
        waitlistRater.appendChild(MemberCard(memberNames[i]));
    }

    return waitlistRater;
  }

  render() {
    console.log("Rendering MemberBoard...");
    // Current Rate section
    const currentRate = this.createCurrentRateSection();

    // Waitlist Rater section
    const waitlistRater = this.createWaitlistRaterSection();

    this.memberBoardElement.appendChild(currentRate);
    this.memberBoardElement.appendChild(waitlistRater);
  }
}

export default MemberBoard;