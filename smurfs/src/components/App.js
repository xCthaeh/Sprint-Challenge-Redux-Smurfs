import React, { Component } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
import Header from "./Header";
import Form from "./Form";
import SmurfsList from "./SmurfsList";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSmurfSubmit = e => {
    e.preventDefault();

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.addSmurf(newSmurf);

    this.setState({
      name: "",
      age: "",
      height: ""
    });

    this.props.history.push("/");
  };

  handleCancel = e => {
    e.preventDefault();

    this.setState({
      name: "",
      age: "",
      height: ""
    });

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Route
          exact
          path="/"
          render={props => <SmurfsList smurfs={this.props.smurfs} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSmurfs, addSmurf }
  )(App)
);
