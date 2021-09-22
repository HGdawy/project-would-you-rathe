import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./components.css";
import { connect } from "react-redux";
import Logout from "./Logout";
import { Selecteduser } from "../actions/users";

class NavBar extends Component {

  componenetDidMount() {
    this.props.dispatch(Selecteduser());
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="navcustomstyling">
          
          {!this.props.path && <Logout />}

          <Nav className="me-auto">
            <NavLink
              to="/home"
              className="homeText"
            >
              Home
            </NavLink>
            <NavLink
              to="/add"
              className="homeText"
            >
              New Question
            </NavLink>
            <NavLink
              to="/leaderboard"
              className="homeText"
            >
              Leaderboard
            </NavLink>
          </Nav>
        </Navbar>
        <br></br>
        <br></br>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(NavBar);
