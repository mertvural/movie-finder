import React, { Component } from 'react'
import img from '../images/noimage.jpg';

export default class Modalreact extends Component {

  constructor(props) {
    super(props);
    this.closePopup = this.closePopup.bind(this);
  }

  closePopup() {
    this.props.closePopup(true)
  }

  
  render() {
    return (
      !!this.props.modalShow && (
        <div className="modalarea">
          <div className="bgtransparent"></div>
          <div className="modal">
            <button href="" className="close" onClick={this.closePopup}>Kapat</button>
            <div className="poster">
              <img src={this.props.targetData.Poster === "N/A" ? img : this.props.targetData.Poster} alt="" />
            </div>
            <h1>{this.props.targetData.Title}</h1>
            <ul>
              <li>
                <b>Konusu</b> : {this.props.targetData.Plot}
              </li>
              <li>
                <b>Gösterim Tarihi</b> : {this.props.targetData.Released}
              </li>
              <li>
                <b>imdb Puanı</b> : {this.props.targetData.imdbRating} - <b>Film Yılı</b> : {this.props.targetData.Year}
              </li>
              <li>
                <b>Yönetmen</b> : {this.props.targetData.Director}
              </li>
              <li>
                <b>Tür</b> : {this.props.targetData.Genre} -  {this.props.targetData.Type}
              </li>
              <li>
                <b>Aktörler</b> : {this.props.targetData.Actors}
              </li>
              <li>
                <b>Ödüller</b> : {this.props.targetData.Awards}
              </li>
              <li>
                <b>Gişe</b> : {this.props.targetData.BoxOffice}
              </li>
              <li>
                <b>Ülke</b> : {this.props.targetData.Country}
              </li>
              <li>
                <b>imdb Toplam Oy</b> : {this.props.targetData.imdbVotes}
              </li>

            </ul>


          </div>
        </div>
      )

    )
  }
}
