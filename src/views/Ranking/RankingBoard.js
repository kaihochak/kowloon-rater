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
        // this.attachEventListeners();
    }

    getElement() {
        return this.rankingBoardElement;
    }

    // Logic to interact with the presenter


    createRankingBoardElement() {
        const rankingBoard = document.createElement("div");
        rankingBoard.className = "rankingBoard";
        return rankingBoard;
    }

    createRatingSection(ratedTargets, currentTarget, currentRating) {
        const card = document.createElement("div");
        card.className = "rating rankingBoard-cards";

        // The queue for rank targets
        card.appendChild(Queue(ratedTargets));

        // The rating data
        card.appendChild(RatedTargetCard());

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
        console.log("RankingBoard.js: Rendering Rating Section");
        const ratingSection = this.createRatingSection(ratedTargets, currentTarget, currentRating);
        this.rankingBoardElement.appendChild(ratingSection);
    }

    renderRankingSection() {
        console.log("RankingBoard.js: Rendering Ranking Section");
        const rankingSection = this.createRankingSection();
        this.rankingBoardElement.appendChild(rankingSection);
    }

}

export default RankingBoard;