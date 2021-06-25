import React, { Component } from 'react'
import ChairList from './ChairList'
import AddChairForm from './AddChairForm'

export default class EditChairs extends Component {
    render() {
        return (
            <div className="container">
                <AddChairForm onAddChair={this.props.onAddChair}/>
                <ChairList chairs={this.props.chairs} 
                    buttonText="Remove" 
                    buttonClass="btn-danger" 
                    onButtonClick={this.props.onRemoveChair} 
                    showButton />
            </div>
        )
    }
}
