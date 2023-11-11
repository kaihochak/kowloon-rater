/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// appPresenter.js
import * as StateManager from './models/state.js';
import NavBar from './components/NavBar.js';
import NavBarPresenter from './components/NavBarPresenter.js';
import Content from './components/Content.js';
import ContentPresenter from './components/ContentPresenter.js';

class AppPresenter {
    constructor() {
        // Holds references to the DOM elements
        this.navBarElement = document.getElementById("navBar");
        this.contentElement = document.getElementById("content");

        // Initialize the navigation bar and content
        this.initializeNav();
        this.initializeContent("testing");
    }

    confirmClosing() {
        // TODO: Implement a confirmation dialog
        return true;
    }

    addEventListeners() {
        document.getElementById("logo").addEventListener("click", () => {
            if (StateManager.getSessionProgress() && !this.confirmClosing()) {
                console.log("Session is in progress. Do not close the session.");
                return; // Do not close the session
            } else {
                console.log("Session is not in progress. Close the session.");
                this.initializeContent("home"); // Reinitialize the content when Home is clicked
            }
        });

        document.getElementById("create").addEventListener("click", () => {
            this.initializeContent("create"); // Reinitialize the content with Create component
        });

        // Add other event listeners as needed
    }

    initializeNav() {
        console.log("appPresenter.js: Initializing navigation bar...");

        // Create the NavBarView and NavBarPresenter
        this.navBarView = new NavBar();
        this.navBarPresenter = new NavBarPresenter(this.navBarView);

        // Get the nav element from the NavBarView and append it to the navBarElement
        this.navBarElement.appendChild(this.navBarView.getElement());
    }

    initializeContent(component) {
        console.log("appPresenter.js: Initializing content with component: " + component);
       
        // Create the contentView and ContentPresenter
        this.contentView = new Content(component);
        this.contentPresenter = new ContentPresenter(this.contentView);
    }

    changeContent(component) {
        this.contentPresenter.initializeContent(component);
    }

    handleStateChange() {
        // Code to handle state changes globally
        return
    }
}

export default AppPresenter;
