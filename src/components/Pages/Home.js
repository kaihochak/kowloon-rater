/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

function Home() {
    const homeComponent = document.createElement("div");
    homeComponent.innerHTML = `
        <h2>Featured Rankings</h2>
        <div class="music-rankings">
            <h3>Music Rankings</h3>
            <!-- Add your music ranking content here -->
        </div>
        <div class="sport-stars-rankings">
            <h3>Sport Stars Rankings</h3>
            <!-- Add your sport stars ranking content here -->
        </div>
        <div class="movies-rankings">
            <h3>Movies Rankings</h3>
            <!-- Add your movies ranking content here -->
        </div>
    `;

    return homeComponent;
}

export default Home;
