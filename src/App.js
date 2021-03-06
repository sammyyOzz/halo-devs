import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import HomeServices from './HomeServices';
import HomeFeedback from './HomeFeedback';
import HomePortfolio from './HomePortfolio';
import Footer from './Footer';
import AboutUs from './AboutUs';
import ChooseUs from './ChooseUs';
import ContactUs from './ContactUs';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <HomeServices />
            <HomeFeedback />
            <HomePortfolio />
          </Route>
          <Route exact path="/about">
            <AboutUs />
            <ChooseUs />
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
