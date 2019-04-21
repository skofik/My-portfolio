import React, { Component } from "react";
import "../style/App.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Home from "./Home";

class App extends Component {
  state = {
    active: false
  };

  handleMenuButton = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };
  render() {
    const { active } = this.state;

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header style={active ? { zIndex: "6" } : null}>
            <span className="buttonHamburger" onClick={this.handleMenuButton} style={active ? { right: "20%" } : { transform: "translateX(0%)" }} >
              {active ? <i className="fas fa-arrow-right" ></i> : <i className="fas fa-bars" />}
            </span>
            <nav style={active ? { transform: "translateX(0%)" } : { transform: "translateX(120%)" }}>
              <ul>
                <li> <NavLink to="/" onClick={this.handleMenuButton} exact >Home</NavLink> </li>
                <li> <NavLink to="/Skills" onClick={this.handleMenuButton}>Skills</NavLink> </li>
                <li> <NavLink to="/Projects" onClick={this.handleMenuButton}>Projects</NavLink> </li>
                <li> <NavLink to="/Contact" onClick={this.handleMenuButton}>Contact</NavLink> </li>
              </ul>
            </nav>
          </header>
          <section>
            <Route path="/" exact component={Home} />
            <Route path="/Skills" exact component={Skills} />
            <Route path="/Projects" exact component={Projects} />
            <Route path="/Contact" exact component={Contact} />
          </section>
          <footer className="footer">
            <span>
              <p>Copyright @ 2019. Daniel Skowron </p> <a target="_blank" rel="noopener noreferrer" href="http://www.freepik.com"> background Designed by Freepik</a>
            </span>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
