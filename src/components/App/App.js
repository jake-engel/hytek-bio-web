import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import LandingPage from '../Pages/LandingPage/LandingPage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import NewsPage from '../Pages/NewsPage/NewsPage';
import TechnologiesPage from '../Pages/TechnologiesPage/TechnologiesPage';
import NoMatchPage from '../Pages/NoMatchPage/NoMatchPage';
import Footer from '../Footer/Footer';
// import Butter from 'buttercms';

// import { butterCMSId } from '../../config/keys';

// const butter = Butter(butterCMSId);

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/technologies" component={TechnologiesPage} />
        <Route component={NoMatchPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

// Sample CMS Retrieval
// butter.content
//   .retrieve(['test_content_label'])
//   .then(function({ data: { data } }) {
//     console.log(data);
//   });
