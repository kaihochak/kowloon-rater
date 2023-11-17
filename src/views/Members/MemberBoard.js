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
        if (this.currentRatingInput.value && this.currentRatingInput.value <= 10) {
          this.presenter.submitRating(this.currentRatingInput.value);
        }
      });
      this.currentRatingInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter" && this.currentRatingInput.value && this.currentRatingInput.value <= 10) {
          this.presenter.submitRating(this.currentRatingInput.value);
        }
      });
    }
  }

  // Update the current rater's name
  updateCurrentRater(name, index) {
    let image = this.currentRaterImg.querySelector("img");
    image.src = `./src/assets/${index}.png`;
    this.currentRaterName.innerHTML = name;
    this.ratingSlider.value = this.currentRatingInput.value = "";
  }

  // Update the waitlist
  updateWaitlistRaters(membersNames, currentRaterIndex) {
    const newWaitlist = this.createWaitlistRaterSection(membersNames, currentRaterIndex);
    this.waitlistRater.replaceWith(newWaitlist);
    this.waitlistRater = newWaitlist;
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
    currentRater.appendChild(MemberCard(firstMember, 0));
    currentRate.appendChild(currentRater);

    this.currentRaterImg = currentRater.querySelector(".memberImg");
    this.currentRaterName = currentRater.querySelector(".memberName");

    // Current Rating
    const currentRating = document.createElement("div");
    currentRating.className = "currentRating";
    currentRating.innerHTML = `
        <div class="input-container">
            <input type="number" id="ratingInput" value="5" min="0" max="10" step="0.1">
            <button id="submitRating" class="nextButton">Next</button>
        </div>
        <input type="range" id="ratingSlider" value="5" min="0" max="10" step="0.1">
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

    // Loop through member names, skipping the current member
    const endPart = memberNames.slice(currentRaterIndex + 1);
    const startPart = memberNames.slice(0, currentRaterIndex);
    const wrappedArray = endPart.concat(startPart);

    for (let i = 1; i < wrappedArray.length+1; i++) {
      let index = currentRaterIndex + i;
      if (index >= memberNames.length) {
        index -= memberNames.length;
      }
      waitlistRater.appendChild(MemberCard(memberNames[index], index));
    }

    return waitlistRater;
  }

  render(firstMember, memberNames, currentRaterIndex) {
    // Current Rate section
    const currentRate = this.createCurrentRateSection(firstMember, 5);
    // Waitlist Rater section
    this.waitlistRater = this.createWaitlistRaterSection(memberNames, currentRaterIndex);

    this.memberBoardElement.appendChild(currentRate);
    this.memberBoardElement.appendChild(this.waitlistRater);

    // licnese attribute
    const license = document.createElement("div");
    license.className = "license";
    license.innerHTML = `
      <a href="https://www.flaticon.com/packs/avatars-60" title="Icon Pack: Avatars | Flat">Icon Pack: Avatars | Flat created by Adib Sulthon - Flaticon</a>
    `;
    this.memberBoardElement.appendChild(license);
  }

  disableRating() {
    this.currentRatingInput.disabled = true;
    this.ratingSlider.disabled = true;
    this.submitButton.disabled = true;
  }

  enableRating() {
    this.currentRatingInput.disabled = false;
    this.ratingSlider.disabled = false;
    this.submitButton.disabled = false;
  }

}

export default MemberBoard;