import React, { Component } from 'react';
import {Doubt} from './index';
import {connect} from 'react-redux';


class DoubtList extends Component {
    render() {
        const doubts=this.props.doubts;
        return (
            <div id="doubtList-wrapper">
              {doubts.length===0&& <h2 id="doubtList-heading-no-left">No doubts left...</h2>}
              {doubts.length!==0 &&<h2 id="doubtList-heading">
                Incoming New Doubts...
              </h2>}
                {doubts.map((doubt) => (
            <Doubt
              doubt={doubt}
              key={doubt._id}
              dispatch={this.props.dispatch}
            />
          ))}
          
            </div>
        );
    }
}

function mapstatetoprops(state) {
  return {
    doubts: state.doubts.doubts,
  };
}

export default connect(mapstatetoprops)(DoubtList);