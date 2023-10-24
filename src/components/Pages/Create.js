/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import createTierListForm from '../../utils/forms/createTierListForm.js';
import createRankingForm from '../../utils/forms/createRankingForm.js';

// Flag to track if a form is open
const formStatus = {
    isFormOpen: false
};

function Create() {

    const createContainer = document.createElement("div");
    createContainer.innerHTML = `
        <div id="newList">
            <h2>New List</h2>
            <div>
                <button id="createTierList">Tier List</button>
                <button id="createRanking">Ranking</button>
            </div>
        </div>
    `;

    // Add event listeners for the buttons
    const createTierListButton = createContainer.querySelector("#createTierList");
    const createRankingButton = createContainer.querySelector("#createRanking");

    createTierListButton.addEventListener("click", () => {
        createTierListForm(formStatus);
    });

    // Add event listeners for the buttons
    createRankingButton.addEventListener("click", () => {
        createRankingForm(formStatus);
    });

    return createContainer;
}

export default Create;
