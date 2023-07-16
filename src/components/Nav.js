import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class navbar extends Component {
  render() {
    return (
      <div>
        
        {/* <!-- Navigation --> */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div className="container">
    <Link className="navbar-brand" to="/general">
      <h2>NewsBar</h2>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>


      </div>
    )
  }
}

export default navbar
