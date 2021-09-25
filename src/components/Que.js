import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleQs, saveQ } from "../actions/shared";

class Que extends Component {
  state = {
    authedUser: "",
    showHomePage: false,
    qid: "",
    answer: "",
    votes: "",
    percentage: 0,
    OptionOnePercentage:0,
    OptionTwoPercentage:0,
    optionOneVotesNum:0,
    optionTwoVotesNum:0,
  };

  handleSelect(e) {
    this.setState({ answer: [e.target.value] });
  }

  componentDidMount() {
    this.props.dispatch(handleQs());

    if (
      Object.entries(this.props.state.users).length !== 0 &&
      Object.entries(this.props.state.username).length !== 0 &&
      Object.entries(this.props.state.que).length !== 0
    ) {
      this.setState({
        authedUser: this.props.state.username.id,
      });

      
      this.setState({
        qid: this.props.state.que.question.id,
      });
      
      const { question } = this.props.state.que;
      const { username, users } = this.props.state;
      let userAnswer = "";
      let votes = "";
      let percentage = 0;
      let OptionOnePercentage = 0;
      let OptionTwoPercentage = 0;
      let optionOneVotesNum = 0 ;
      let optionTwoVotesNum = 0 ;
      //comparing the id of the username object with the ids of question answers and extracting the match
      Object.entries(username.answers).map((answer) => {
        if (question[answer[1]].votes.includes(username.id)) {
          userAnswer = question[answer[1]].text;
          votes = question[answer[1]].votes.length;
          percentage = (votes / Object.keys(users).length) * 100;
          OptionOnePercentage = (question.optionOne.votes.length / votes) * 100 ;
          OptionTwoPercentage = (question.optionTwo.votes.length / votes) * 100 ;
          optionOneVotesNum = question.optionOne.votes.length
          optionTwoVotesNum = question.optionTwo.votes.length
          this.setState({ answer: userAnswer });
          this.setState({ votes: votes });
          this.setState({ percentage: percentage });
          this.setState({ OptionOnePercentage: OptionOnePercentage });
          this.setState({ OptionTwoPercentage: OptionTwoPercentage });
          this.setState({ optionTwoVotesNum: optionTwoVotesNum });
          this.setState({ optionOneVotesNum: optionOneVotesNum });
        }
        console.log(question)
        return question;
      });
    }
  }
  handleSubmit(e) {
    if (this.state.authedUser === "" && this.state.qid === "") {

      let obj = {
        answer: this.state.answer,
        qid: window.location.pathname.split("/")[2],
        authedUser: this.props.state.username.id,
      };

      this.props.dispatch(saveQ(obj));
    }

    this.setState({ showHomePage: true });
  }

  render() {
    let question = this.props.state.selectQ;
    
    const { users } = this.props.state;
    const { username } = this.props.state;
    if (Object.keys(question).length === 0) {
      const questionid = window.location.pathname.split("/")[2];
      question = this.props.state.que[questionid];

      if (Object.keys(this.props.state.ques).length !== 0) {
        if (!question) {
          return (
            <Redirect
              to={{
                pathname: "/error",
              }}
            ></Redirect>
          );
        }
      }
    }

    if (Object.entries(this.props.state.username).length === 0) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { referrer: `${window.location.pathname} ` },
          }}
        />
      );
    }
    if (Object.entries(this.props.state.username).length === 0) {
      return <Redirect to="/" />;
    }
    if (question["optionOne" || "optionTwo" ].votes.includes(username.id)) {
      question.category = "answered";
    } 

    let category = question.category;

    return (
      <div>
        
        {category === "answered" ? (
          <div>
            <div className="card">
              <Card>
                <Card.Header>Answered</Card.Header>
                <Card.Body>
                  
                    {Object.entries(question).map((answer) => {
                      
                      if ( answer[0] === "optionOne" || answer[0] === "optionTwo") {
                        if (answer[1].text === this.state.answer) {
                          return (
                            <>
                            <Card.Text style={{ color: "green" }} key={answer.toString(44)}> 
                              Answered: {answer[1].text}
                            </Card.Text>
                            <Card.Text>
                            percentage of people who voted for {answer[1].text} :  
                              {Math.round(this.state.OptionOnePercentage)}%
                            </Card.Text>
                            <Card.Text>
                            Num of people who voted for {answer[1].text} :  
                              {this.state.optionOneVotesNum}
                            </Card.Text>
                            </>
                          );
                          
                        } 
                        return (
                        <>
                        <Card.Text key={answer.toString(33)}> Not Answered: {answer[1].text}</Card.Text>
                        <Card.Text>
                           percentage of people who voted for {answer[1].text} :  
                           {Math.round(this.state.OptionTwoPercentage)}%
                        </Card.Text>
                        <Card.Text>
                           Num of people who voted for {answer[1].text}  : 
                           {this.state.optionTwoVotesNum}
                        </Card.Text>
                        </>
                        )
                      }
                      return null
                    })}
                  
                  <Card.Text>
                    Number of All people who voted:
                    {this.state.votes}
                  </Card.Text>
                  <Card.Text>
                    percentage of All people who voted:
                    {Math.round(this.state.percentage)}%
                  </Card.Text>
                  </Card.Body>
              </Card>
            </div>
          </div>
        ) : (
          <div>
            <div className="card">
              <Card>
                <Card.Header>Unanswered</Card.Header>
                <Card.Body>
                  <Card.Title tag="h5">Asked </Card.Title>
                  <h4>Would You Rather?</h4>
                  <Card.Img
                    variant="right"
                    className="img"
                    description="now"
                    src={users[question.author]["avatarURL"]}
                  ></Card.Img>
                  <Card.Text>
                    <input
                      onChange={this.handleSelect.bind(this)}
                      type="radio"
                      name="optradio"
                      className="answer1"
                      value={"optionOne"}
                    />
                    {question["optionOne"].text}
                    <br></br>
                    <input
                      onChange={this.handleSelect.bind(this)}
                      type="radio"
                      name="optradio"
                      className="answer2"
                      value={"optionTwo"}
                    />

                    {question["optionTwo"].text}
                  </Card.Text>

                  <Button
                    variant="primary"
                    onClick={this.handleSubmit.bind(this)}
                  >
                    {this.state.showHomePage && (
                      <Redirect
                        to={{
                          pathname: "/home",
                          state: {
                            referrer: question.id,
                            loc: "questions",
                            question: question,
                            answer: this.state.answer,
                          },
                        }}
                      />
                    )}
                    Submit
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state: state,
  };
}

export default connect(mapStateToProps, null)(Que);
