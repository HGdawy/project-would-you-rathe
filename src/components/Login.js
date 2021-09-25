import React, { Component } from "react";
import { Dropdown, Form, Card, Button } from "react-bootstrap";
import Home from "./Home";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleSelectUser } from "../actions/users";



class Login extends Component {
  state = {
    showHomePage: false,
  };

  handleChange = () => {
    this.setState({
      showHomePage: true,
    });
  };

  handleUserSelect = (e) => {
    this.props.dispatch(handleSelectUser(this.props.state.users[e]));
  };

  render() {
    const { users } = this.props.state;

    return (
      <div>
        
        <Card className="Card">
          <Form style={{ textAlign: "center" }} className="form">
            <Form.Text className="text-muted">
              <h1>Would You Rather?</h1>
              <br></br>
              <br></br>
              <h4>Login to play</h4>
            </Form.Text>
            <br></br>
            <Dropdown onSelect={this.handleUserSelect.bind(this)}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.username ? this.state.username : "Choose username"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.values(users).map((username) => (
                  <Dropdown.Item eventKey={username.id} key={username.id}>
                    {username.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <br></br>
            <Button
              variant="primary"
              size="md"
              active
              onClick={this.handleChange}
            >
              Log In
            </Button>
            {this.state.showHomePage ? (
              <>
                <div>
                  <Redirect
                    to={
                      this.props.location.state
                        ? this.props.location.state.referrer
                        : "/home"
                    }
                  />
                  <Home />
                </div>
              </>
            ) : null}
          </Form>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, null)(Login);
