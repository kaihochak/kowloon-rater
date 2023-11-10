/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

/* MemberBoard.js */
import MemberCard from "./MemberCard.js";

export default class MemberBoard {
  constructor(presenter) {
    this.presenter = presenter;
    this.memberBoard = document.createElement("div");
    this.memberBoard.className = "memberBoard";

    // Initial member and rating values should come from the presenter
    this.firstMember = this.presenter.getCurrentMemberName();
    this.firstRating = this.presenter.getInitialRating();

    // Initialize the view components
    this.initCurrentRate();
    this.initWaitlistRater();
  }

  // Method to initialize the "current rater" section
  initCurrentRate() {
    const currentRate = document.createElement("div");
    currentRate.className = "currentRate";

    // Current rater
    const currentRater = document.createElement("div");
    currentRater.className = "currentRater";
    currentRater.appendChild(MemberCard(this.firstMember));
    currentRate.appendChild(currentRater);

    // Current Rating
    const currentRating = document.createElement("div");
    currentRating.className = "currentRating";
    currentRating.innerHTML = `
      <div class="input-container">
          <div></div>
          <input type="number" id="ratingInput" value="${this.firstRating}" min="0" max="100">
          <button id="submitRating">Next</button>
      </div>
      <input type="range" id="ratingSlider" value="${this.firstRating}" min="0" max="100">
  `;
    currentRate.appendChild(currentRating);
    this.memberBoard.appendChild(currentRate);

    // Add event listeners that call presenter methods
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    const ratingInput = document.getElementById("ratingInput");
    const ratingSlider = document.getElementById("ratingSlider");
    const submitButton = document.getElementById("submitRating");

    // Sync input and slider
    ratingInput.addEventListener("input", () => {
      const value = parseInt(ratingInput.value);
      ratingSlider.value = value;
      this.presenter.handleRatingChange(value); // Assuming a method in presenter
    });

    ratingSlider.addEventListener("input", () => {
      const value = parseInt(ratingSlider.value);
      ratingInput.value = value;
      this.presenter.handleRatingChange(value); // Assuming a method in presenter
    });

    // Submit rating
    submitButton.addEventListener("click", () => {
      const ratingValue = parseInt(ratingInput.value);
      this.presenter.submitRating(ratingValue); // Assuming a method in presenter
    });

    // Submit with Enter key
    ratingInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const ratingValue = parseInt(ratingInput.value);
        this.presenter.submitRating(ratingValue); // Assuming a method in presenter
      }
    });
  }

  // Method to initialize the "waitlist rater" section
  initWaitlistRater() {
    const waitlistRater = document.createElement("div");
    waitlistRater.className = "waitlistRater";
    this.memberBoard.appendChild(waitlistRater);
    // Populate waitlist raters, this could be done via a presenter method
    this.presenter.populateWaitlist(waitlistRater);
  }

  // Method to update the "current rater" display
  updateCurrentRater(memberName) {
    const currentRater = this.memberBoard.querySelector('.currentRater');
    // Clear previous member card
    currentRater.innerHTML = '';
    // Append new member card
    currentRater.appendChild(MemberCard(memberName));
  }

  // Method to update the "waitlist rater" display
  updateWaitlistRater(memberNames) {
    const waitlistRater = this.memberBoard.querySelector('.waitlistRater');
    waitlistRater.innerHTML = ''; // Clear out the old list
    for (let i = 1; i < memberNames.length; i++) {
      waitlistRater.appendChild(MemberCard(memberNames[i]));
    }
  }

  // Render method to append the memberBoard to a container
  render(container) {
    container.appendChild(this.memberBoard);
  }
}
