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
    constructor(component) {
        // Holds references to the DOM elements
        this.navBarElement = document.getElementById("navBar");
        this.contentElement = document.getElementById("content");

        StateManager.registerListener(this.handlePageChange, ['page']);
        // Initialize the navigation bar and content
        this.initializeNav();
        this.initializeContent(component);
    }

    confirmClosing() {
        // TODO: Implement a confirmation dialog
        return true;
    }

    initializeNav() {
        // Create the NavBarView and NavBarPresenter
        this.navBarView = new NavBar();
        this.navBarPresenter = new NavBarPresenter(this.navBarView);

        // Get the nav element from the NavBarView and append it to the navBarElement
        this.navBarElement.appendChild(this.navBarView.getElement());
    }

    initializeContent(component) {
        console.log("appPresenter.js: Initializing content with component: " + component);
       
        // Create the contentView and ContentPresenter
        this.contentView = new Content();
        this.contentPresenter = new ContentPresenter(this.contentView);
        this.contentPresenter.initializeContent(component);
    }

    handlePageChange = (state) => {
        if (state.page == "create") {
            console.log("appPresenter.js: Page changed to create");
            this.initializeContent("create");
        } else if (state.page == "ranking") {
            console.log("appPresenter.js: Page changed to ranking");
        }
        return 
    }
}

export default AppPresenter;
