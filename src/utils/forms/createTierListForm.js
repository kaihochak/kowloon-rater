import closeForm from "./closeCreateForm.js";


// Function to create the pop-up form for Tier List
function createTierListForm(formStatus) {

    // Close the existing form if one is open
    if (formStatus.isFormOpen) {
        closeForm(formStatus);
    }

    const createTierForm = document.createElement("div");
    createTierForm.className = "createForm";
    createTierForm.innerHTML = `
        <div class="formTitle">
            <h3>Create tier list</h3>
            <button id="closeForm">Close</button>
        </div>
        <form class="formContent">
            <h2>To be implemented</h2>
        </form>
    `;

    // append the form to the content element
    const contentElement = document.getElementById("content");
    contentElement.appendChild(createTierForm);

    // Set the flag to indicate that a form is open
    formStatus.isFormOpen = true;

    // Add an event listener to the close button
    const closeFormButton = createTierForm.querySelector("#closeForm");
    closeFormButton.addEventListener("click", () => {
        closeForm(formStatus);
    });
}

export default createTierListForm;
