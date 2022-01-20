import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <div id="active-doubts-heading">
                    Available Doubts
                </div>
                <div id="active-doubts-number">
                    {this.props.doubts.length}
                </div>

            </div>
        );
    }
}
function mapstatetoprops(state) {
    return {
      doubts: state.doubts.doubts,
    };
  }
  
  export default connect(mapstatetoprops)(Header);