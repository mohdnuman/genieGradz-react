import React, { Component } from 'react';

class Doubt extends Component {
    render() {
        return (
            <div className='doubt-wrapper'>
                <div className='doubt-user'>
                    <img src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1642075943~hmac=236879b571aa50fa21c8c1ce55a9f7a2"  className='user-picture'/>
                    <span className='user-name'>Numan</span>
                </div>
                <div className='doubt-topic'> 
                    Topic-Recursion
                </div>
                <div className='doubt-description'>
                    Description-second Doubt
                </div>
                <button className='doubt-button'>
                    ACCEPT
                </button>
            </div>
        );
    }
}

export default Doubt;