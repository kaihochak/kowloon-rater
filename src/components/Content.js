/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// Content.js
class Content {
    constructor() {
        this.contentElement = document.getElementById("content");
    }

    setPresenter(presenter) {
        this.presenter = presenter;
    }

    clearContent() {
        this.contentElement.innerHTML = ''; // Clear existing content
    }

    renderComponent(element) {
        // Append the component's element to the content area
        this.contentElement.appendChild(element);
    }
}

export default Content;
