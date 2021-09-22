import React, { Component } from "react";
import UnAns from "./UnAns";
import Ans from "./Ans";
import "./components.css";
import { Button, Nav, Navbar, NavLink } from "react-bootstrap";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { handleQs } from "../actions/shared";
import { Redirect } from "react-router-dom";


class Home extends Component {
  
  state = {
    showUnanswered: true,
    showAnswered: false,
  };

  componentDidMount() {
    this.props.dispatch(handleQs());
  }

  UnansweredButtonClick = () => {
    this.setState({
      showUnanswered: true,
      showAnswered: false,
    });
  };

  AnsweredButtonClick = () => {
    this.setState({
      showAnswered: true,
      showUnanswered: false,
    });
  };

  render() {
    const { ques } = this.props.state;
    const { username } = this.props.state;
    const location = this.props.location ? this.props.location : {}

    if (location && location.state && location.state.loc === "questions") {
      location.state.question.category = "answered";
      location.state.question[location.state.answer].votes = username.id;
          return (
            <Redirect
              to={{
                state: location.state.que,
                pathname: `/questions/${location.state.referrer}`,
              }}
            />
          );
    }
    
    if (Object.entries(this.props.state.username).length === 0) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { referrer: "/home" },
          }}
        />
      );
    }

    let answerdquestion = [];
    let unaswerdquestion = [];
    Object.values(ques).forEach((que) => {
      
        que["optionOne"].votes.includes(username.id) || que["optionTwo"].votes.includes(username.id)
       ? answerdquestion.push(que)       
       : unaswerdquestion.push(que)
      
    });

    answerdquestion.sort().reverse();
    unaswerdquestion.sort().reverse();
    return (
      <div>
        <NavBar />
        <div className="pollbox">
          <Navbar>
            <Nav className="list">
              <NavLink>
                <Button id="unanswered-Button" onClick={this.UnansweredButtonClick}>
                  Unanswered Questions
                </Button>
              </NavLink>
              <NavLink>
                <Button id="Answered-Button" onClick={this.AnsweredButtonClick}>
                  Answered Questions
                </Button>
              </NavLink>
            </Nav>
          </Navbar>

          {unaswerdquestion.map((que) => {  
                return this.state.showUnanswered 
                ? (<UnAns question={que} key={que.id} />) 
                : null; 
          })}

          <div className="Unanswered-Button">
            {answerdquestion.map((que) => {
              
                return this.state.showAnswered
                 ? (<Ans question={que} key={que.id} />) 
                 : null;  
            })}
          </div>
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

export default connect(mapStateToProps, null)(Home);
