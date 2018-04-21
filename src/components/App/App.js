import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import LandingPage from '../Pages/LandingPage/LandingPage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import NewsPage from '../Pages/NewsPage/NewsPage';
import TechnologiesPage from '../Pages/TechnologiesPage/TechnologiesPage';
import NoMatchPage from '../Pages/NoMatchPage/NoMatchPage';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Redirect from="/home" to="/" />
        <Route path="/about" component={AboutPage} />
        <Route path="/contactus" component={ContactPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/technologies" component={TechnologiesPage} />
        <Route component={NoMatchPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
