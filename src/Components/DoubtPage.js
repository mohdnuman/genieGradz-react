import React, { Component } from "react";
import {Chat} from './index';
import { fetchActiveDoubt, resolveDoubt } from "../actions/activeDoubt";
import { connect } from "react-redux";

class DoubtPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resolved: false,
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.dispatch(fetchActiveDoubt(id));

  }

  handleResolve = () => {
    let id = this.props.match.params.id;
    this.props.dispatch(resolveDoubt(id));
    this.setState({ resolved: true });
  };

  render() {
    const activeDoubt = this.props.activeDoubt;
   
    // console.log(activeDoubt);
    return (
      <div>
        <span id="side-panel">
          <div id="doubt-info">
            <div id="doubt-page-user">
              <img
                src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1642500704~hmac=f9817717f2fb1e1cf456ac6f37359bd9"
                id="doubt-page-user-pic"
                alt="user-pic"
              />
              <span id="doubt-page-user-name">{activeDoubt.user}</span>
            </div>
            <div id="doubt-page-topic">
              <span id="topic-text">Topic- </span>
              {activeDoubt.topic}
            </div>

            <div id="doubt-page-description">
              <span id="topic-text"> Description-</span>
              {activeDoubt.description}
            </div>
          </div>
          
          <div id="resolve-section">
            {(!this.state.resolved && !activeDoubt.resolved) && (
              <button id="resolve-button" onClick={this.handleResolve}>
                Resolve
              </button>
            )}
            { (this.state.resolved || activeDoubt.resolved) && <div id="resolved-text">DOUBT IS RESOLVED. ✔</div>}
          </div>
        </span>

        <Chat id={this.props.match.params.id} resolved={activeDoubt.resolved}/>
      </div>
    );
  }
}

function mapstatetoprops(state) {
  return {
    activeDoubt: state.activeDoubt,
  };
}

export default connect(mapstatetoprops)(DoubtPage);
