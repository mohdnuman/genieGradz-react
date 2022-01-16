import { Navbar, DoubtList ,DoubtPage } from "./index";
import { connect } from "react-redux";
import { fetchDoubts } from "../actions/doubts";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDoubts());
  }
  render() {
    const { doubts } = this.props;
    // console.log(doubts);
   

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" render={(props)=>{
              return <DoubtList {...props} doubts={doubts}/>
            }}/>
          <Route path="/doubts/:id" component={DoubtPage} />

          </Switch>

          
        </div>
      </Router>
    );
  }
}

function mapstatetoprops(state) {
  return {
    doubts: state.doubts.doubts,
  };
}

export default connect(mapstatetoprops)(App);
