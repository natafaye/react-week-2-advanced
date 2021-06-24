import React, { Component } from 'react'

export default class Chair extends Component {
    render() {
        return (
            <div className="card mb-3 mx-2 w-25">
                <img src={this.props.chair.image} className="card-image-top"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.chair.title}</h5>
                    <p className="card-text">{this.props.chair.description}</p>
                    { (this.props.showButton) ? 
                        <button className={"btn " + this.props.buttonClass} onClick={() => this.props.onButtonClick(this.props.chair.id)}>
                            {this.props.buttonText}
                        </button> 
                        : ""
                    }
                </div>
            </div>
        )
    }
}
