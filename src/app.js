/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import NavBar from './components/NavBar.js';
import Home from './components/Pages/Home.js';
import Create from './components/Pages/Create.js';
import RankingSession from './components/Ranking/RankingSession.js';

// Initialize the session status state
const state = {
    isSessionInProgress: false,
};

// Function to update isSessionInProgress state
function updateSessionInProgress(status) {
    state.isSessionInProgress = status;
}

// Function to confirm closing a session
function confirmClosing() {
    // TODO: Add a confirmation dialog
    return true;
}

// Function to add event listeners for navigation bar buttons
function addEventListeners() {
    document.getElementById("logo").addEventListener("click", () => {
        if (state.isSessionInProgress && !confirmClosing()) {
            console.log("Session is in progress. Do not close the session.");
            return; // Do not close the session
        } else {
            console.log("Session is not in progress. Close the session.");
            initializeContent("home"); // Reinitialize the content when Home is clicked
        }
    });

    // document.getElementById("search").addEventListener("click", () => {
    //     // Handle Search button click, e.g., by showing a Search component
    // });

    // document.getElementById("explore").addEventListener("click", () => {
    //     // Handle Explore button click, e.g., by showing an Explore component
    // });

    document.getElementById("create").addEventListener("click", () => {
        initializeContent("create"); // Reinitialize the content with Create component
    });

    // document.getElementById("profile").addEventListener("click", () => {
    //     // Handle Profile button click, e.g., by showing a Profile component
    // });

    // document.getElementById("settings").addEventListener("click", () => {
    //     // Handle Settings button click, e.g., by showing a Settings component
    // });

    // Add event listeners for other navigation links as needed
}

// Function to initialize the navigation bar
function initializeNav() {
    console.log("Initializing navigation bar...");

    // Add event listeners for navigation bar buttons
    const navBar = document.getElementById("navBar");
    navBar.innerHTML = ''; // Clear existing content
    navBar.appendChild(NavBar());

    addEventListeners(); // Add event listeners for navigation bar buttons
}

// Function to initialize the content
function initializeContent(component) {
    console.log("Initializing content with component: " + component);

    // Clear the content element
    const contentElement = document.getElementById("content");
    contentElement.innerHTML = ''; // Clear existing content

    // Display the specified component
    switch (component) {
        case "testing":
            updateSessionInProgress(true);
            contentElement.appendChild(RankingSession());
            break;
        case "create":
            contentElement.appendChild(Create());
            break;
        default:
            contentElement.appendChild(Home());
            break;
    }

    
}

// Wait for the DOM to fully load before initializing the content
document.addEventListener("DOMContentLoaded", function() {
    initializeNav(); // Initialize the navigation bar
    initializeContent("testing"); // Call initializeContent once the DOM is ready
});

// Export functions to be used by other components
export { updateSessionInProgress };