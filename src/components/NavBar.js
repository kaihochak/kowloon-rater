/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// NavBar.js
class NavBar {
    constructor() {
        this.navElement = this.createNavBarElement();
    }

    createNavBarElement() {
        // console.log("NavBar.js: Initializing nav bar");

        // Create the nav element
        const navElement = document.createElement("nav");
        navElement.innerHTML = ''; // Clear existing content
        navElement.innerHTML = `
            <div id="left-nav" class="box">
                <span>
                    <h2 href="#" id="menu">Menu</h2>
                </span>
            </div>
            <h2 id="logo" class="box">
                <span>KOWLOON RATER</span>
            </h1>
            <div id="right-nav" class="box">
                <span>
                    <h2 href="#" id="create">Create</h2>
                </span>
            </div>
        `;
        return navElement;
    }

    getElement() {
        return this.navElement;
    }

    setPresenter(presenter) {
        this.presenter = presenter;
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Attach event listeners to the nav element and delegate events to the presenter
        this.navElement.querySelector("#logo").addEventListener("click", () => this.presenter.onLogoClick());
        this.navElement.querySelector("#create").addEventListener("click", () => this.presenter.onCreateClick());
        // Add more listeners as needed
    }
}

export default NavBar;
