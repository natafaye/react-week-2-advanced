import React, { Component } from 'react';
import Chair from './Chair';

export default class ChairList extends Component {
    render() {
        return (
            <div className="row my-3">
                <div className="col d-flex">
                    { this.props.chairs.map(chair => <Chair key={chair.title} chair={chair} {...this.props} />)}
                </div>
            </div>
        )
    }
}