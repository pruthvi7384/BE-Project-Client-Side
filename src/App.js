import React from 'react';
import { Route, Switch } from 'react-router';
import Footer from './Components/Footer/Footer';
import NavigationBar from './Components/NavBar/NavigationBar';
import About from './Pages/About/About';
import SignIn from './Pages/Account/SignIn';
import SignUp from './Pages/Account/SignUp';
import Contact from './Pages/Contact/Contact';
import Disease from './Pages/Diseases/Diseases';
import Errore from './Pages/Errore/Errore';
import Home from './Pages/Home/Home';
import SymtomsChecker from './Pages/SymtomsChecker/SymtomsChecker';

function App() {
  return (
    <>
      <Switch>
          <Route exact path="/">
              <NavigationBar path="/"/>
              <Home/>
          </Route>
          <Route exact path="/about">
              <NavigationBar path="/about"/>
              <About/>
          </Route>
          <Route exact path="/symptomschecker">
              <NavigationBar path="/symptomschecker"/>
              <SymtomsChecker/>
          </Route>
          <Route exact path="/diseases">
              <NavigationBar path="/diseases"/>
              <Disease/>
          </Route>
          <Route exact path="/contact">
              <NavigationBar path="/contact"/>
              <Contact/>
          </Route>
          <Route exact path="/signup">
              <NavigationBar path="/signup"/>
              <SignUp/>
          </Route>
          <Route exact path="/login">
              <NavigationBar path="/login"/>
              <SignIn/>
          </Route>
          <Route>
              <Errore/>
          </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
