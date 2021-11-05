import React from 'react';
import { Route, Switch } from 'react-router';
import Footer from './Components/Footer/Footer';
import NavigationBar from './Components/NavBar/NavigationBar';
import About from './Pages/About/About';
import SignIn from './Pages/Account/SignIn';
import SignUp from './Pages/Account/SignUp';
import Contact from './Pages/Contact/Contact';
import Diseases from './Pages/Diseases/Diseases';
import Errore from './Pages/Errore/Errore';
import Home from './Pages/Home/Home';
import SymtomsChecker from './Pages/SymtomsChecker/SymtomsChecker';
import Chat from './SubPages/Chat/Chat';
import Disease from './SubPages/Disease/Disease';

function App() {
  return (
    <>
      <Switch>
          <Route exact path="/">
              <NavigationBar path="/"/>
              <Home/>
              <Footer/>
          </Route>
          <Route exact path="/about">
              <NavigationBar path="/about"/>
              <About/>
              <Footer/>
          </Route>
          <Route exact path="/symptomschecker">
              <NavigationBar path="/symptomschecker"/>
              <SymtomsChecker/>
              <Footer/>
          </Route>
          <Route exact path="/diseases">
              <NavigationBar path="/diseases"/>
              <Diseases/>
              <Footer/>
          </Route>
          <Route exact path="/contact">
              <NavigationBar path="/contact"/>
              <Contact/>
              <Footer/>
          </Route>
          <Route exact path="/signup">
              <NavigationBar path="/signup"/>
              <SignUp/>
              <Footer/>
          </Route>
          <Route exact path="/login">
              <NavigationBar path="/login"/>
              <SignIn/>
              <Footer/>
          </Route>
          <Route exact path="/disease/:id">
              <NavigationBar/>
              <Disease/>
              <Footer/>
          </Route>
          <Route exact path="/chat">
               <NavigationBar/>
               <Chat/>
          </Route>
          <Route>
              <Errore/>
          </Route>
      </Switch>
    </>
  );
}

export default App;
