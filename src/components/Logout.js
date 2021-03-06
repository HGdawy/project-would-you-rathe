import React, { Component } from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./components.css";

class Logout extends Component {
  render() {
    const { username } = this.props.state;

    return (
      <div>
        <Navbar>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="dark">
                {username.name 
                ?`hellow ${username.name}`
                :`You are not logedin`}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link
                  to="/"
                  variant="dark"
                  className="homeText"
                >
                  Logout
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            {username.name 
                ? <img alt="Avatar" id="image" src={username.avatarURL} />
                :null}
            
          </Nav>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Logout);
