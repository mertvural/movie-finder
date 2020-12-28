import React, { Component } from 'react'


export class alert extends Component {
    render() {
      
        return (
            !!this.props.alertView && (
            <div className="alertbox pg">
                Sonuç Bulunamadı...
            </div>  
        )
        )
        }
    }


export default alert
