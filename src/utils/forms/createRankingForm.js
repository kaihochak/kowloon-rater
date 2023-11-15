import * as StateManager from "../../models/state.js";
import RankingSession from "../../views/Ranking/RankingSession.js";
import closeForm from "./closeCreateForm.js";
import closeContent from "../closeContent.js";

const formData = {
    rankingName: "", // Initialize with empty values
    numMembers: 1,
    memberNames: [],
};

// Function to create the pop-up form for Ranking
function createRankingForm(formStatus) {
    
    // Close the existing form if one is open
    if (formStatus.isFormOpen) {
        closeForm(formStatus);
    }

    const createRankForm = document.createElement("div");
    createRankForm.className = "createForm";
    createRankForm.id = "createRankForm";
    createRankForm.innerHTML = `
        <div class="formTitle">
            <h3>Create ranking</h3>
            <button id="closeForm">Close</button>
        </div>
        <form class="formContent">
            <input type="text" id="rankingName" name="rankingName" placeholder="Ranking name">
            <select id="numMembers" name="numMembers" >
                <option disabled selected>Number of members</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <div id="memberInputs"></div>
            <br>
            <button type="submit">Create</button>
        </form>
    `;

    // Add event listener for the "Number of members" select element
    const numMembersSelect = createRankForm.querySelector('#numMembers');
    numMembersSelect.addEventListener('change', () => {
        const numMembers = parseInt(numMembersSelect.value);
        formData.numMembers = numMembers;
        createMemberNameInputs(numMembers);
    });

    // Add event listener for the form submission
    const submitButton = createRankForm.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the form from submitting

        // Retrieve the selected number of members
        const numMembers = parseInt(numMembersSelect.value);

        // Retrieve the ranking name
        const rankingNameInput = createRankForm.querySelector("#rankingName");
        const rankingName = rankingNameInput.value;
        formData.rankingName = rankingName;
        
        // Create a ranking session
        renderRankingSession();
    });

    // append the form to the content element
    const contentElement = document.getElementById("content");
    contentElement.appendChild(createRankForm);

    // Set the flag to indicate that a form is open
    formStatus.isFormOpen = true;

    // Add an event listener to the close button
    const closeFormButton = createRankForm.querySelector("#closeForm");
    closeFormButton.addEventListener("click", () => {
        closeForm(formStatus);
    });
}

// Function to create member name input fields
function createMemberNameInputs(numMembers) {

    // Retrieve the member inputs container
    const createRankForm = document.querySelector("#createRankForm");
    const memberInputsContainer = createRankForm.querySelector("#memberInputs");

    // console.log("numMembers: " + numMembers);

    // Store the current number of input fields
    const currentNumInputs = memberInputsContainer.children.length;

    if (numMembers > currentNumInputs) {
        // Add input fields for additional members
        for (let i = currentNumInputs + 1; i <= numMembers; i++) {
            const memberInput = document.createElement("input");
            memberInput.type = "text";
            memberInput.name = `memberName${i}`;
            memberInput.placeholder = `Name`;
            memberInputsContainer.appendChild(memberInput);
        }
    } else if (numMembers < currentNumInputs) {
        // Remove excess input fields
        for (let i = currentNumInputs; i > numMembers; i--) {
            memberInputsContainer.removeChild(memberInputsContainer.lastChild);
        }
    }

    // Add an input event listener to capture user input
    const memberNameInputs = Array.from(memberInputsContainer.children);
    memberNameInputs.forEach((memberInput, index) => {
        memberInput.addEventListener("input", () => {
            // console.log(`Member ${index + 1} Name: ${memberInput.value}`);
            formData.memberNames[index] = memberInput.value;
        });
    });
}

// Function to render a ranking session
function renderRankingSession() {

    // Create a new session
    // console.log("Creating ranking session...");
    // console.log(formData);

    // close the current content 
    closeContent();

    // Render the ranking session
    const contentElement = document.getElementById("content");
    contentElement.appendChild(RankingSession(formData));

    // update the state to indicate that a session is in progress
    StateManager.updateSessionInProgress(true);
}

export default createRankingForm;