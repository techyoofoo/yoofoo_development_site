import React, { Component } from "react";
// import { Router, Route, Switch } from 'react-router';
import { Route, HashRouter } from "react-router-dom";

import Homescreen from '../screens/home-screen';
// import ContactUsscreen from '../screens/contactus';
// import Aboutusscreen from '../screens/aboutus';
// import Blogscreen from '../screens/blog';
// import Articleseventsscreen from '../screens/articlesevents';
// import Ourdnascreen from '../screens/ourdna';
// import Practiceareasscreen from '../screens/practiceareas';
// import DistributedAgileAugmentationscreen from '../screens/DistributedAgileAugmentation';
// import TechnologyProjectConsultingscreen from '../screens/TechnologyProjectConsulting';
// import DigitalTransformationStrategiesscreen from '../screens/DigitalTransformationStrategies';
// import Bfsiscreen from '../screens/bfsi';
// import LifeSciencesscreen from '../screens/LifeSciences';
// import HighTechscreen from '../screens/HighTech';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Homescreen} />
          {/* <Route exact path="/contact-us" component={ContactUsscreen} />
          <Route exact path="/about-us" component={Aboutusscreen} />
          <Route exact path="/blog" component={Blogscreen} />
          <Route exact path="/articles-events" component={Articleseventsscreen} />
          <Route exact path="/ourdna" component={Ourdnascreen} />
          <Route exact path="/practice-areas" component={Practiceareasscreen} />
          <Route exact path="/DistributedAgileAugmentation" component={DistributedAgileAugmentationscreen} />
          <Route exact path="/TechnologyProjectConsulting" component={TechnologyProjectConsultingscreen} />
          <Route exact path="/DigitalTransformationStrategies" component={DigitalTransformationStrategiesscreen} />
          <Route exact path="/bfsi" component={Bfsiscreen} />
          <Route exact path="/LifeSciences" component={LifeSciencesscreen} />
          <Route exact path="/HighTech" component={HighTechscreen} /> */}
        </div>
      </HashRouter>
    );
  }
}

export default Routes;