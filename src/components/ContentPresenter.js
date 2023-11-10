/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// ContentPresenter.js
import HomePresenter from './HomePresenter.js'; 
import CreatePresenter from './CreatePresenter.js'; 
import RankingSessionPresenter from './RankingSessionPresenter.js'; 
import HomeView from './Home.js'; 
import CreateView from './Create.js';
import RankingSessionView from './RankingSession.js';

class ContentPresenter {
    constructor(contentView) {
        this.view = contentView;
        this.view.setPresenter(this);
    }

    initializeContent(component) {
        console.log("Initializing content with component: " + component);

        this.view.clearContent(); // Delegate to view

        let componentView, componentPresenter;

        // Instantiate the correct view and presenter based on the component
        switch (component) {
            case "testing":
                componentView = new RankingSessionView();
                componentPresenter = new RankingSessionPresenter(componentView);
                break;
            case "create":
                componentView = new CreateView();
                componentPresenter = new CreatePresenter(componentView);
                break;
            default:
                componentView = new HomeView();
                componentPresenter = new HomePresenter(componentView);
                break;
        }

        // Set the presenter for the component view and render it
        componentView.setPresenter(componentPresenter);
        this.view.renderComponent(componentView.getElement());
    }
}

export default ContentPresenter;
