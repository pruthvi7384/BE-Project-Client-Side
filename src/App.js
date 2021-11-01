import React from 'react';
import Footer from './Components/Footer/Footer';
import NavigationBar from './Components/NavBar/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar/>
      <div className="text-center">
          <h1 className="text-success">Early prediction of lifestyle diseases</h1>
          <h2 className="text-info">Started Implementation Front End Using React</h2>
      </div>
      <Footer/>
    </>
  );
}

export default App;
