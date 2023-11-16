/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// Content.js
import Create from '../views/Create.js';

class Content {
    constructor() {
        this.contentElement = document.getElementById("content");
    }

    renderComponent(element) {
        console.log(`Content.js: appending ${element.className} to content`);
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

    createCreateView() {
        this.contentElement = Create();
    }

}

export default Content;
