import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Header from './components/common/Header';
import PageNotFound from './components/common/PageNotFound';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AnnouncementsPage from './components/AnnouncementsPage';
import AttendancePage from './components/AttendancePage';
import QuestionPage from './components/QuestionPage';
import AdminPage from './components/AdminPage';
import TeamPage from './components/TeamPage';

import urlContext from './contexts/urlContext';

function App() {

  const backgroundStyle = {
    background: `url('${process.env.PUBLIC_URL}/background.png') no-repeat center center`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  }

  const contextValue = {
    serverUrl : 'https://pmc140-pioneers-test.herokuapp.com'
  }

  return (
    <urlContext.Provider value={contextValue}>
      <div className="App" style={backgroundStyle}>
        <Header />
        <Router>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            {/* <Route path='/announcements' exact>
              <AnnouncementsPage />
            </Route> */}
            {/* <Route path='/attendance' exact>
              <AttendancePage />
            </Route> */}
            <Route path='/question' exact>
              <QuestionPage />
            </Route>
            <Route path='/team' exact>
              <TeamPage />
            </Route>
            <Route path='/admin' exact>
              <AdminPage />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </urlContext.Provider>
  );
}

export default App;
