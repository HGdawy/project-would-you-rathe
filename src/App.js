import React, { Component } from "react";
import Login from "./components/Login";
import NewQ from "./components/NewQ";
import LeadBoard from "./components/LeadBoard";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "./App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../src/actions/shared";
import { Route, Switch } from "react-router-dom";
import Que from "./components/Que";

class App extends Component {
  state = {
    leaderboard: false,
    question: false,
  };
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <div className="bg">
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
        </div>
        <Switch>
          <Route path="/questions/:question_id" component={Que}></Route>
          <Route path="/home" component={Home} />
          <Route path="/add" component={NewQ} />
          <Route path="/leaderboard" component={LeadBoard} />
          <Route exact path="/" component={Login} />
          <Route exact path="/error" component={NotFound} />
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {this.state.leaderboard ? (
          <>
            <div>
              <Login />
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, null)(App);
