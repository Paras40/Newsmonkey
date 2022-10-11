import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    const theme = "dark";
    return (
      <>
        <Router>
          <Navbar theme={theme} />
          <Routes>
            <Route exact path='/' element=
              {
                <News key="general" theme={theme} pageSize={9} country="in" category="general" />
              } />
            <Route exact path='/business' element=
              {
                <News key="business" theme={theme} pageSize={9} country="in" category="business" />
              } />
            <Route exact path='/entertainment' element=
              {
                <News key="entertainment" theme={theme} pageSize={9} country="in" category="entertainment" />
              } />
            <Route exact path='/health' element=
              {
                <News key="health" theme={theme} pageSize={9} country="in" category="health" />
              } />
            <Route exact path='/science' element=
              {
                <News key="science" theme={theme} pageSize={9} country="in" category="science" />
              } />
            <Route exact path='/sports' element=
              {
                <News key="sports" theme={theme} pageSize={9} country="in" category="sports" />
              } />
            <Route exact path='/technology' element=
              {
                <News key="technology" theme={theme} pageSize={9} country="in" category="technology" />
              } />
          </Routes>
        </Router>
      </>
    )
  }
}