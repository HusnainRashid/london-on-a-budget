import React from 'react';
import './App.css';
import './index.css';
import Search from './components/Search/Search';
import EventsView from './components/EventsView/EventsView';
import IconsMenu from './components/IconsMenu/IconsMenu';
import Navbar from './components/navbar/Navbar';
// import LoginForm from '../auth/LoginForm';
import SignUpForm from './components/user/SignUpForm';

function App() {
  return (
    <html>
      <head>
        <title>London on a Budget</title>
      </head>
      <body>
        <Navbar />
        <div className="landing-page">
       
          <br></br>
          <IconsMenu />
          <EventsView />
        </div>
      </body>
    </html>
  );
}


export default App;
