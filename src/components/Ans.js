import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "./components.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectQ } from "../actions/shared";


class Ans extends Component {
  state = {
    AnsweredQuestion: false,
  };

  onClick = (que) => {
    que.category = "answered";
    this.props.dispatch(selectQ(que));
    this.setState({
      AnsweredQuestion: true,
    });
  };

  render() {
    const que = this.props.question;

    return (
      <div className="card">
        <Card>
          <Card.Header className="AnsweredText">Answered</Card.Header>
          <Card.Header>Asked by {que.author}</Card.Header>
          <Card.Body>
            <Card.Title tag="h5">Would You Rather?</Card.Title>
            <Card.Text>{que["optionTwo"].text}</Card.Text>
            <Button onClick={this.onClick.bind(this, que)}>
              View Poll
            </Button>
            {this.state.AnsweredQuestion 
            ? (<>
                {" "}
                <Redirect
                  to={{
                    pathname: `/questions/${que.id}`,
                    state: {},
                  }}
                />
              </>
            ) : null}
          </Card.Body>
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

export default connect(mapStateToProps, null)(Ans);
