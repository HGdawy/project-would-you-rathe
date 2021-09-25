import React, { Component } from "react";


import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class NotFound extends Component {
  render() {
    if (Object.entries(this.props.state.username).length === 0) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { referrer: "/error" },
          }}
        />
      );
    }
    return (
      <div>
          <h1>404 - Not Found!</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, null)(NotFound);
