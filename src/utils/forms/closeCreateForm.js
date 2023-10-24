// Function to close the currently open form
function closeForm(formStatus) {

    console.log("closing form...");

    // Remove the form from the content element
    const openForm = document.querySelector(".createForm");
    if (openForm) {
        const contentElement = document.getElementById("content");   
        contentElement.removeChild(openForm);
        formStatus.isFormOpen = false; // Reset the flag
    }
}

export default closeForm;