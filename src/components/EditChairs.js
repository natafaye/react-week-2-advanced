import React, { Component } from 'react'
import ChairList from './ChairList'

export default class EditChairs extends Component {
    render() {
        return (
            <div className="container">
                <button className="btn btn-success my-3">Add Chair</button>
                <ChairList chairs={this.props.chairs} 
                    buttonText="Remove" 
                    buttonClass="btn-danger" 
                    onButtonClick={this.props.onRemoveChair} 
                    showButton />
            </div>
        )
    }
}
