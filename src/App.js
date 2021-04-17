import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import HomeServices from './HomeServices';
import HomeFeedback from './HomeFeedback';

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
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
