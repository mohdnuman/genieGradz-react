import React, { Component } from 'react';

class Doubt extends Component {
    render() {
        return (
            <div className='doubt-wrapper'>
                <div className='doubt-user'>
                    Numan
                </div>
                <div className='doubt-topic'> 
                    Recurion
                </div>
                <div className='doubt-description'>
                    second Doubt
                </div>
                <button className='doubt-button'>
                    ACCEPT
                </button>
            </div>
        );
    }
}

export default Doubt;