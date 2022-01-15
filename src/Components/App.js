import {Navbar,Doubt} from './index';
import {connect} from 'react-redux';
import {fetchDoubts} from '../actions/doubts';


import React, { Component } from 'react';

class App extends Component {
  componentDidMount(){
        this.props.dispatch(fetchDoubts());
  }

  render() {
    const {doubts}=this.props;
    console.log(doubts);

    return (
      <div className="App">
            <Navbar />
            {doubts.map((doubt) => (
                <Doubt doubt={doubt} key={doubt._id}/>
            ))}
      
      
           </div>
    );
  }
}

function mapstatetoprops(state){
  return{
    doubts:state.doubts.doubts
  };
}


export default connect(mapstatetoprops)(App);
