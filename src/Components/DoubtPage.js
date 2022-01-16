import React, { Component } from 'react';
import Doubt from './Doubt';
import {Chat} from './index';


class DoubtPage extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
    }
    

    render() {
        return (
            <div>
                hello
                <Chat />
            </div>
        );
    }
}

export default DoubtPage;