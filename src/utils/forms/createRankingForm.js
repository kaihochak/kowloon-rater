/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import * as StateManager from "../../models/state.js";
import RankingSession from "../../views/Ranking/RankingSession.js";

const formData = {
    rankingName: "", // Initialize with empty values
    targetNames: [],
    numMembers: 1,
    memberNames: [],
};

// Function to create the pop-up form for Ranking
function createRankingForm() {

    const createRankForm = document.createElement("div");
    createRankForm.className = "createForm";
    createRankForm.id = "createRankForm";
    createRankForm.innerHTML = `
        <div class="formTitle">
            <h3>Create Ranking</h3>
        </div>
        <form class="formContent">
            <input type="text" id="rankingName" name="rankingName" placeholder="Title">
            <input type="text" class="rateTarget" name="rankingName" placeholder="Target 1">
            <input type="text" class="rateTarget" name="rankingName" placeholder="Target 2">
            <input type="text" class="rateTarget" name="rankingName" placeholder="Target 3">
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

        let isValid = false;

        // Retrieve the target names
        const targetInputs = createRankForm.querySelectorAll(".rateTarget");
        targetInputs.forEach((targetInput, index) => {
            if (targetInput.value == "") {
                isValid = false;
                targetInput.focus();
                targetInput.style.border = "1px solid red";
            } else {
                isValid = true;
                targetInput.style.border = "1px solid black";
                formData.targetNames[index] = targetInput.value;
            }
        });

        // Retrieve the member names
        const memberInputs = createRankForm.querySelectorAll("#memberInputs input")
    
        // Validate the member names and store them in the formData object
        memberInputs.forEach((memberInput, index) => {
            if (memberInput.value == "") {
                isValid = false;
                memberInput.focus();
                memberInput.style.border = "1px solid red";
            } else {
                isValid = true;
                memberInput.style.border = "1px solid black";
                formData.memberNames[index] = memberInput.value;
            }
        });

        // only create a ranking session if all member names are valid
        if (isValid) {
            // Retrieve the ranking name
            const rankingNameInput = createRankForm.querySelector("#rankingName");
            const rankingName = rankingNameInput.value;
            formData.rankingName = rankingName;
            
            // Create a ranking session
            StateManager.createRankingSession(formData.rankingName, formData.targetNames, formData.memberNames);
        }
    });

    // append the form to the content element
    const contentElement = document.getElementById("content");
    contentElement.appendChild(createRankForm);

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

export default createRankingForm;