/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

/* MemberBoard.js */

import MemberCard from "./MemberCard.js";

// Define a class for the MemberBoard view
export default class MemberBoard {
  constructor(presenter) {
    this.presenter = presenter;
    this.memberBoard = document.createElement("div");
    this.memberBoard.className = "memberBoard";

    // Initialize the view components
    this.initCurrentRate();
    this.initWaitlistRater();
  }

  // Method to initialize the "current rate" section
  initCurrentRate() {
    const currentRate = document.createElement("div");
    currentRate.className = "currentRate";
    // ... rest of the setup ...
    this.memberBoard.appendChild(currentRate);
    // ... Add event listeners that call presenter methods ...
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

  // ... More methods to update the UI based on the state ...

  // Render method to append the memberBoard to a container
  render(container) {
    container.appendChild(this.memberBoard);
  }
}
