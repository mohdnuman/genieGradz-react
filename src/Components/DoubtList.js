import React, { Component } from 'react';
import {Doubt} from './index';
import {connect} from 'react-redux';


class DoubtList extends Component {
    render() {
        const doubts=this.props.doubts;
        return (
            <div>
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