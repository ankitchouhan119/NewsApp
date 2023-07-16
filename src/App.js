import React, { Component } from 'react'
import Nav from './components/Nav';
import News from './components/News';
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <Nav />
          <Routes>
            {/* <Route exact path="/general" element={<News key="general" pageSize={9} country="in" category="general"/>} /> */}
            <Route exact path="/general" element={<News key="general" pageSize={9} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports" />} />
            <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology" />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
