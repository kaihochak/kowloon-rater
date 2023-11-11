/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// Content.js
import RankingSession from "../views/Ranking/RankingSession.js";
import * as StateManager from '../models/state.js';

// ContentView.js
class Content {
    constructor() {
        this.contentElement = document.getElementById("content");
    }

    renderComponent(element) {
        this.contentElement.innerHTML = ''; // Clear existing content
        this.contentElement.appendChild(element); // Display the new component
    }

    setPresenter(presenter) {
        this.presenter = presenter;
        // this.attachEventListeners();
    }

    clearContent() {
        this.contentElement.innerHTML = '';
    }
    
}

export default Content;
