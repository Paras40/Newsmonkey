import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
    render() {
        const myStyle={
            position: 'fixed',
            left: '50%',
            top: '50%'
        }
        return (
            <div className="text-center">
                <img src={loading} style={myStyle} alt="loading" />
            </div>
        )
    }
}

export default Spinner