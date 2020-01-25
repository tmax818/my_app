import React from 'react';
import logo from './logo.svg';
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="page">
      <div className="header-wrapper">
        <div class="logo"><a href="/"><img src="images/logo.png"/></a></div>
        </div> 
        <div className="page-wrapper">
          <Header/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
