import React, { Component } from 'react'
import List from './list'

export default class Lists extends Component {
    render() {
        return (
            <div className="thumbnails pg">

                {this.props.stateList.map(stateOne => (
                    <List stateList={stateOne} key={stateOne.imdbID} targetID = {this.props.targetID} />
                ))}
                
            </div>
        )
    }
}
