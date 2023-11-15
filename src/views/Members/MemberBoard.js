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
      // make rating input and slider work together
      this.currentRatingInput.addEventListener("input", () => {
        this.ratingSlider.value = this.currentRatingInput.value;
      });
      this.ratingSlider.addEventListener("input", () => {
        this.currentRatingInput.value = this.ratingSlider.value;
      });

      // submit rating
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

  // Update the current rater's name
  updateCurrentRater(name) {
    this.currentRaterImg.style.backgroundImage = `url(./assets/images/${name}.jpg)`;
    this.currentRaterName.innerHTML = name;
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

    this.currentRaterImg = currentRater.querySelector(".memberImg");
    this.currentRaterName = currentRater.querySelector(".memberName");


    // Current Rating
    const currentRating = document.createElement("div");
    currentRating.className = "currentRating";
    currentRating.innerHTML = `
        <div class="input-container">
            <div></div>
            <input type="number" id="ratingInput" value="${firstRating}" min="0" max="100">
            <button id="submitRating" class="nextButton">Next</button>
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

  createWaitlistRaterSection(memberNames, currentRaterIndex) {
    const waitlistRater = document.createElement("div");
    waitlistRater.className = "waitlistRater";

    // Loop through member names, skipping the first member
    memberNames.slice(currentRaterIndex+1).forEach(memberName => {
        waitlistRater.appendChild(MemberCard(memberName));
    });

    return waitlistRater;
  }

  render(firstMember, memberNames, currentRaterIndex) {
    // console.log("MemberBoard.render() called");
    // Current Rate section
    const currentRate = this.createCurrentRateSection(firstMember, 50);
    // Waitlist Rater section
    const waitlistRater = this.createWaitlistRaterSection(memberNames, currentRaterIndex);

    this.memberBoardElement.appendChild(currentRate);
    this.memberBoardElement.appendChild(waitlistRater);
  }

  disableRating() {
    // console.log("MemberBoard.disableRating() called");
    this.currentRatingInput.disabled = true;
    this.ratingSlider.disabled = true;
    this.submitButton.disabled = true;
  }

  enableRating() {
    // console.log("MemberBoard.enableRating() called");
    this.currentRatingInput.disabled = false;
    this.ratingSlider.disabled = false;
    this.submitButton.disabled = false;
  }

}

export default MemberBoard;