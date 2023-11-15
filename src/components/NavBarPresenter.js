/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// NavBarPresenter.js
import * as StateManager from '../models/state.js';

class NavBarPresenter {
    constructor(navBarView) {
        // Logic to link the presenter to the view
        this.view = navBarView;
        this.view.setPresenter(this);
    }

    onLogoClick() {
        if (StateManager.getSessionProgress() && !this.confirmClosing()) {
            // console.log("Session is in progress. Do not close the session.");
        } else {
            // console.log("Session is not in progress. Close the session.");
            // Call a method to handle reinitializing the content
        }
    }

    onCreateClick() {
        // Call a method to handle initializing the Create component
    }
}

export default NavBarPresenter;
