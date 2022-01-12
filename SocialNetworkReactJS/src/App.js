import React from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  // debugger
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile store={props.store} />} />

          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />

          <Route path="/news" render={() => <News />} />

          <Route path="/music" render={() => <Music />} />

          <Route path="/settings" render={() => <Settings />} />

          <Route path="/friends" render={() => <Friends
            state={props.state.NavBar} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;