/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

import createTierListForm from '../utils/forms/createTierListForm.js';
import createRankingForm from '../utils/forms/createRankingForm.js';

class Create {
    constructor() {
        this.createContainer = this.Create();
    }

    setPresenter(presenter) {
        this.presenter = presenter;
    }

    getElement() {
        return this.createContainer;
    }

    Create() {
        const createContainer = document.createElement("div");
        createContainer.appendChild(createRankingForm());

        return createContainer;
    }
}


export default Create;
