/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// RankingBoard.js
import Queue from "../../utils/Tables/Queue.js";
import RatedTargetCard from "../../utils/RatedTargetCard.js";

class RankingBoard {
    constructor(){
        this.rankingBoardElement = this.createRankingBoardElement();
    }

    setPresenter(presenter) {
        this.presenter = presenter;
    }

    getElement() {
        return this.rankingBoardElement;
    }

    createRankingBoardElement() {
        const rankingBoard = document.createElement("div");
        rankingBoard.className = "rankingBoard";
        
        return rankingBoard;
    }

    createRatingSection(ratedTargets, currentTarget, currentRating) {
        const card = document.createElement("div");
        card.className = "rating rankingBoard-cards";

        // The queue for rank targets
        this.queue = Queue(ratedTargets);
        card.appendChild(this.queue);

        // The rating data
        // console.log("RankingBoard.js: Creating RatedTargetCard: ", currentRating);
        if (currentRating != "-") currentRating = Math.round(currentRating * 10) / 10;
        this.ratedTargetCard = RatedTargetCard(currentRating, currentTarget);
        card.appendChild(this.ratedTargetCard);

        return card;
    }

    createRankingSection() {   
        const ranking = document.createElement('div');
        ranking.className = 'ranking rankingBoard-cards';
        
        const rankingList = document.createElement('table');
        rankingList.className = 'rankingList';
  
        rankingList.innerHTML = `
            <tr>
                <th>Rank</th>
                <th>Target</th>
                <th>Rating</th>
            </tr>
            <tr>
                <td>1</td>
                <td>cherry</td>
                <td>97</td>
            </tr>
            <tr>
                <td>2</td>
                <td>blackberry</td>
                <td>95</td>
            </tr>
            <tr>
                <td>3</td>
                <td>kiwi</td>
                <td>83</td>
            </tr>
            <tr>
                <td>4</td>
                <td>papaya</td>
                <td>84</td>
            </tr>
        `;
        
        ranking.appendChild(rankingList);     
        
        return ranking;
    }

    renderRatingSection(ratedTargets, currentTarget, currentRating) {
        // console.log("RankingBoard.js: Rendering Rating Section");
        // Check if the rating section already exists
        let ratingSection = this.rankingBoardElement.querySelector('.rating');
        if (ratingSection) {
            // Update existing section
            ratingSection.replaceWith(this.createRatingSection(ratedTargets, currentTarget, currentRating));
        } else {
            // Create and append new section
            ratingSection = this.createRatingSection(ratedTargets, currentTarget, currentRating);
            this.rankingBoardElement.appendChild(ratingSection);
        }
    }

    renderRankingSection() {
        // console.log("RankingBoard.js: Rendering Ranking Section");
       // Check if the ranking section already exists
       let rankingSection = this.rankingBoardElement.querySelector('.ranking');
       if (rankingSection) {
           // Update existing section
           rankingSection.replaceWith(this.createRankingSection());
       } else {
           // Create and append new section
           rankingSection = this.createRankingSection();
           this.rankingBoardElement.appendChild(rankingSection);
       }
    }

    highlightCurrentTarget() {
        // console.log("RankingBoard.js: Highlighting current target");

        // Add overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        this.rankingBoardElement.appendChild(overlay);

        // Create a Popup of the current target
        const ratedTargetCard = this.rankingBoardElement.querySelector('.ratingData');
        const centeredTargetCard = ratedTargetCard.cloneNode(true);
        centeredTargetCard.classList.add('highlighted');
        centeredTargetCard.classList.add('centered-ratingCard');

        // Next Button to close popup
        const nextButton = document.createElement('button');
        centeredTargetCard.appendChild(nextButton)
        document.body.appendChild(centeredTargetCard);
        nextButton.className = 'nextButton';
        nextButton.innerHTML = "Next";

        // Close popup when next button is clicked
        nextButton.addEventListener('click', () => {

            // console.log("RankingBoard.js: Next button clicked");
            this.presenter.nextTarget();
            // console.log("RankingBoard.js: Next button clicked");

        });

    }

    nextTarget() {
        // Remove the popup
        const centeredTargetCard =  document.querySelector('.centered-ratingCard');
        document.body.removeChild(centeredTargetCard);
        // Remove the overlay
        const overlay = this.rankingBoardElement.querySelector('.overlay');
        this.rankingBoardElement.removeChild(overlay);
    }
}

export default RankingBoard;