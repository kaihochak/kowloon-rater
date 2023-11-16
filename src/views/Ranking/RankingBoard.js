/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// RankingBoard.js
import Queue from "../../utils/Tables/Queue.js";
import Ranking from "../../utils/Tables/Ranking.js";
import RatedTargetCard from "../../utils/RatedTargetCard.js";

class RankingBoard {
    constructor() {
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

    createRatingSection(ratedTargets, currentTargetID, currentRating) {
        const card = document.createElement("div");
        card.className = "rating rankingBoard-cards";

        // The queue for rank targets
        this.queue = Queue(ratedTargets.slice(currentTargetID));
        card.appendChild(this.queue);

        // The rating data
        if (currentRating != "-") currentRating = Math.round(currentRating * 10) / 10;
        this.ratedTargetCard = RatedTargetCard(currentRating, ratedTargets[currentTargetID]);
        card.appendChild(this.ratedTargetCard);

        return card;
    }

    createRankingSection(sortedRankings) {
        const ranking = document.createElement('div');
        ranking.className = 'ranking rankingBoard-cards';

        // The ranking data
        this.ranking = Ranking(sortedRankings);
        ranking.appendChild(this.ranking);

        return ranking;
    }

    renderRatingSection(ratedTargets, currentTargetID, currentRating) {
        // Check if the rating section already exists
        let ratingSection = this.rankingBoardElement.querySelector('.rating');
        if (ratingSection) {
            // Update existing section
            ratingSection.replaceWith(this.createRatingSection(ratedTargets, currentTargetID, currentRating));
        } else {
            // Create and append new section
            ratingSection = this.createRatingSection(ratedTargets, currentTargetID, currentRating);
            this.rankingBoardElement.appendChild(ratingSection);
        }
    }

    renderRankingSection(rankedTargets) {
        let rankingSection = this.rankingBoardElement.querySelector('.ranking');
        // Check if the ranking section already exists
        if (rankingSection) {
            // Update existing section
            rankingSection.replaceWith(this.createRankingSection(rankedTargets));
        } else {
            // Create and append new section
            rankingSection = this.createRankingSection(rankedTargets);
            this.rankingBoardElement.appendChild(rankingSection);
        }
    }

    highlightCurrentTarget(isLastItem) {
        // Add overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        this.rankingBoardElement.appendChild(overlay);

        // Create a Popup of the current target
        const ratedTargetCard = this.rankingBoardElement.querySelector('.ratingData');
        const centeredTargetCard = ratedTargetCard.cloneNode(true);
        centeredTargetCard.classList.add('highlighted');
        centeredTargetCard.classList.add('centered-ratingCard');

        // Show the final rating
        if (!isLastItem) {            
            // Next Button to close popup
            const nextButton = document.createElement('button');
            centeredTargetCard.appendChild(nextButton)
            document.body.appendChild(centeredTargetCard);
            nextButton.className = 'nextButton';
            nextButton.innerHTML = "Next";

            // Close popup when next button is clicked
            nextButton.addEventListener('click', () => {
                this.presenter.nextTarget();
            });
        // if there is no more item, ask if the user wants to end the session or add one more item
        } else {
            const buttons = document.createElement('div');
            buttons.className = 'buttons';
            centeredTargetCard.appendChild(buttons)
            document.body.appendChild(centeredTargetCard);

            // End Button to end the session
            const endButton = document.createElement('button');
            centeredTargetCard.appendChild(endButton)
            endButton.className = 'endButton';
            endButton.innerHTML = "End";
            buttons.appendChild(endButton);

            // Close popup when next button is clicked
            endButton.addEventListener('click', () => {
                this.presenter.endSession();
            });

            // Add Another Rated Target
            const newItem = document.createElement('div');
            newItem.className = 'additem-input-container';
            newItem.innerHTML = `
                <input type="text" id="addNewItem" placeholder="rate more?">
                <button id="addNewItemButton" class="endButton">Add</button>
            `;
            buttons.appendChild(newItem);
            
            // Close popup when add button is clicked
            let addNewItemButton = document.getElementById('addNewItemButton');
            let addNewItem = document.getElementById('addNewItem');
            addNewItemButton.addEventListener('click', () => {
                this.presenter.nextTarget(addNewItem.value);
            });
        }
    }

    nextTarget(ratedTargets, currentTargetID, currentRating) {
        // Remove the popup
        const centeredTargetCard = document.querySelector('.centered-ratingCard');
        document.body.removeChild(centeredTargetCard);
        // Remove the overlay
        const overlay = this.rankingBoardElement.querySelector('.overlay');
        this.rankingBoardElement.removeChild(overlay);
        // Update the rating section
        this.renderRatingSection(ratedTargets, currentTargetID, currentRating);
    }

    showFinalRanking() {
        this.rankingBoardElement.removeChild(this.rankingBoardElement.querySelector('.rating'));
    }
}

export default RankingBoard;