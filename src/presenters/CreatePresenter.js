/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// CreatePresenter.js


class CreatePresenter {

    constructor(CreateView) {
        this.view = CreateView;
        this.view.setPresenter(this);
    }
}

export default CreatePresenter;