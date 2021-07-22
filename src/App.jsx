import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styled from 'styled-components';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cv from './components/Cv/Cv';
import Project from './components/Projects/Project';
import Interest from './components/Interest/Interest';
import Contact from './components/Contact/Contact';

const SApp = styled.div`
  font-family: 'Quando', sans-serif;
  background: no-repeat url('/backgroud-heros-02.jpg'), #000000;
  background-position: top 0 center;
  min-height: 100vh;
  min-width: 100vw;
`;
function App() {
  return (
    <SApp>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cv">
              <Cv />
            </Route>
            <Route path="/projets">
              <Project />
            </Route>
            <Route path="/interest">
              <Interest />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </SApp>
  );
}

export default App;
