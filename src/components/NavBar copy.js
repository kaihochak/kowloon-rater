/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

function NavBar() {
    const navElement = document.createElement("nav");
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

export default NavBar;
