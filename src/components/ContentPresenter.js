/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// ContentPresenter.js
import RankingSession from '../views/Ranking/RankingSession.js';
import RankingSessionPresenter from '../presenters/RankingSessionPresenter.js'; 
import Create from '../views/Create.js';
import CreatePresenter from '../presenters/CreatePresenter.js';

class ContentPresenter {
    constructor(contentView) {
        // Logic to link the presenter to the view
        this.view = contentView;
        this.view.setPresenter(this);

        this.initializeContent("testing");
    }

    initializeContent(component) {
        // console.log("ContentPresenter.js: Initializing content with component: " + component);

        this.view.clearContent(); // Delegate to view

        // Clear any existing component view and presenter
        this.componentView = null;
        this.componentPresenter = null;
        
        // Instantiate the correct view and presenter based on the component
        switch (component) {
            case "testing":
                this.componentView = new RankingSession();
                this.componentPresenter = new RankingSessionPresenter(this.componentView);
                break;
            case "ranking":
                this.componentView = new RankingSession();
                this.componentPresenter = new RankingSessionPresenter(this.componentView);
                break;
            case "create":
                // Initialize CreateView and CreatePresenter
                this.componentView = new Create();
                this.componentPresenter = new CreatePresenter(this.componentView);
                break;
            default:
                break;
        }

        // Set the presenter for the component view and render it
        if (this.componentView) {
            this.view.renderComponent(this.componentView.getElement());
        }
    }
}

export default ContentPresenter;