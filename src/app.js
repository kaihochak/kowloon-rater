/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// app.js
import AppPresenter from './appPresenter.js';

class App {
    constructor() {
        console.log("app.js: Initializing app");
        this.presenter = new AppPresenter();
    }
}

// Wait for the DOM to fully load before initializing the app
document.addEventListener("DOMContentLoaded", () => {
    new App();
});

// Event listener for state changes
document.addEventListener('stateChange', () => {
    // Delegate to the presenter to handle state changes globally
    // this.presenter.handleStateChange();
});
