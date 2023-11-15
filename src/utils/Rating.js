/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import * as StateManager from "../models/state.js";

const total = 100;

function Rating(){
    
    const ratedTargets = StateManager.getTargets();    

    const card = document.createElement("div");
    card.className = "rating rankingBoard-cards";

    // The queue for rank targets
    card.appendChild(Queue(ratedTargets));

    // The rating data
    card.appendChild(RatedTargetCard());


    return card;
}

export default Rating;