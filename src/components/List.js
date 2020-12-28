import React, { Component } from 'react'
import img from '../images/noimage.jpg';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.targetID = this.targetID.bind(this);

    }

    targetID(e) {
        e.preventDefault();
        this.props.targetID(e.target.getAttribute("data-id"));
    }

    render() {
        return (
            <div className="box">
                <div className="image fit">
                    <img src={this.props.stateList.Poster === "N/A" ? img : this.props.stateList.Poster} alt="" />
                </div>
                <div className="inner">
                    <h3>
                        {this.props.stateList.Title}
                    </h3>
                    <p>
                        Gösterim Yılı : {this.props.stateList.Year}
                    </p>
                    <p>
                        Tür : {this.props.stateList.Type === "series" ? "Dizi" : "Film"}
                    </p>
                    <a className="button fit" data-id={this.props.stateList.imdbID} onClick={this.targetID}>
                        DETAY
                    </a>
                </div>
            </div>
        )
    }
}
