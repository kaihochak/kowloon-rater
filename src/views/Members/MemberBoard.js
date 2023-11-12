/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

/* MemberBoard.js */
import MemberCard from "./MemberCard.js";

class MemberBoard {
  constructor() {
    this.memberBoardElement = this.createMemberBoardElement();
  }

  setPresenter(presenter) {
    this.presenter = presenter;
  }

  getElement() {
    return this.memberBoardElement;
  }

  // Logic to interact with the presenter 
  attachEventListeners() {
    if (this.presenter) {
      this.currentRatingInput.addEventListener("input", () => {
        this.presenter.handleRatingInput(this.currentRatingInput.value);
      });
      this.ratingSlider.addEventListener("input", () => {
        this.presenter.handleRatingSlider(this.ratingSlider.value);
      });
      this.submitButton.addEventListener("click", () => {
        this.presenter.handleSubmitRating(this.currentRatingInput.value);
      });
      this.currentRatingInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          this.presenter.handleSubmitRating(this.currentRatingInput.value);
        }
      });
    }
  }

  createMemberBoardElement() {
    const memberBoard = document.createElement("div");
    memberBoard.className = "memberBoard";
    return memberBoard;
  }

  createCurrentRateSection(firstMember, firstRating) {
    const currentRate = document.createElement("div");
    currentRate.className = "currentRate";

    // Current rater
    const currentRater = document.createElement("div");
    currentRater.className = "currentRater";
    currentRater.appendChild(MemberCard(firstMember)); // Use firstMember for the MemberCard
    currentRate.appendChild(currentRater);

    // Current Rating
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

    // Store elements that need event listeners
    currentRate.appendChild(currentRating);

    // Store references to elements for event listener attachment
    this.currentRatingInput = currentRating.querySelector("#ratingInput");
    this.ratingSlider = currentRating.querySelector("#ratingSlider");
    this.submitButton = currentRating.querySelector("#submitRating");

    return currentRate;
  }

  createWaitlistRaterSection(memberNames) {
    const waitlistRater = document.createElement("div");
    waitlistRater.className = "waitlistRater";

    // Loop through member names, skipping the first member
    memberNames.slice(1).forEach(memberName => {
        waitlistRater.appendChild(MemberCard(memberName));
    });

    return waitlistRater;
  }

  render(firstMember, memberNames) {
    console.log("MemberBoard.render() called");
    // Current Rate section
    const currentRate = this.createCurrentRateSection(firstMember, 50);
    // Waitlist Rater section
    const waitlistRater = this.createWaitlistRaterSection(memberNames);

    this.memberBoardElement.appendChild(currentRate);
    this.memberBoardElement.appendChild(waitlistRater);
  }
}

export default MemberBoard;