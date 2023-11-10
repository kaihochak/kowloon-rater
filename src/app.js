/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import NavBar from './components/NavBar.js';
import Home from './components/Pages/Home.js';
import Create from './components/Pages/Create.js';
import RankingSession from './views/Ranking/RankingSession.js';
import * as StateManager from './models/state.js';

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

    document.getElementById("create").addEventListener("click", () => {
        initializeContent("create"); // Reinitialize the content with Create component
    });

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
            StateManager.setSessionProgress(true);
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

// Event listener for state changes
document.addEventListener('stateChange', () => {
    // Code to handle state changes globally
    // For example, you might want to automatically close a session
    // if the state indicates that no session is in progress
});
