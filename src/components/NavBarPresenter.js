/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// NavBarPresenter.js
import * as UtilityActions from '../actions/utilityActions.js';
import { dispatch } from '../models/state.js';
import * as StateManager from '../models/state.js';

class NavBarPresenter {
    constructor(navBarView) {
        // Logic to link the presenter to the view
        this.view = navBarView;
        this.view.setPresenter(this);
    }

    onLogoClick() {
        dispatch(UtilityActions.goToCreate());
        // if (StateManager.getSessionProgress()) {
        //     // console.log("Session is in progress. Do not close the session.");
        // } else {
        //     // console.log("Session is not in progress. Close the session.");
        //     // Call a method to handle reinitializing the content
        // }
    }
}

export default NavBarPresenter;
