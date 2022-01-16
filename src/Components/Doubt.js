import React, { Component } from 'react';
import {takeDoubt} from '../actions/doubts';
import {Link} from 'react-router-dom';




class Doubt extends Component {
    constructor(props){
        super(props);
        this.state={
            user:'Teacher Rahul',
        }
    }
    handleAccept=async()=>{

        const id=this.props.doubt._id;
        await this.props.dispatch(takeDoubt(id,this.state.user));
    }
       
    render(){
        const {doubt}=this.props;
        
        return (
            <div className='doubt-wrapper'>
                
                <div className='doubt-user'>
                    <img src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1642075943~hmac=236879b571aa50fa21c8c1ce55a9f7a2"  className='user-picture' alt="user"/>
                    <span className='user-name'>{doubt.user}</span>
                </div>
                <div className='doubt-topic'> 
                    Topic-{doubt.topic}
                </div>
                <div className='doubt-description'>
                    Description-{doubt.description}
                </div>
                <Link to={`/doubts/${doubt._id}`}>
                <button className='doubt-button' onClick={this.handleAccept}>
                    ACCEPT
                </button>
                </Link>
            </div>
        );
    }
}


  
  export default Doubt;