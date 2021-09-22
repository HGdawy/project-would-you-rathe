import React, { Component } from "react";
import { Form, Card } from "react-bootstrap";
import "./components.css";
import { connect } from "react-redux";
import { AddQ } from "../actions/shared";
import { Redirect } from "react-router-dom";
import NavBar from "./NavBar";


class NewQ extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    author: "",
    showHomePage: false,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.setState({ author: this.props.state.username.id });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(AddQ(this.state));
    this.setState({ showHomePage: true });
  };

  render() {
    if (Object.entries(this.props.state.username).length === 0) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { referrer: "/add" },
          }}
        />
      );
    }
    return (
      <div>
        <NavBar/>;
        <div className="container">
          <Card className="cardStyle">
            <Form className="newQuestion">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Text>Ask New Question</Form.Text>
                <h1 style={{ textAlign: "center" }}>Would You Rather?</h1>
                <Form.Label>First option</Form.Label>
                <Form.Control
                  name="optionOneText"
                  placeholder="Option 1"
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Second option</Form.Label>
                <Form.Control
                  name="optionTwoText"
                  placeholder="Option 2"
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <button
                type="submit"
                className="button"
                onClick={this.handleSubmit}
              >
                {this.state.showHomePage && <Redirect to="/home" />}
                Submit
              </button>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(NewQ);
