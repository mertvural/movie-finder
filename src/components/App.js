import React, { Component } from 'react'
import Header from './Header';
import Search from './Search';
import Lists from './Lists';
import Alert from './Alert'
import axios from 'axios';
import Modalreact from './Modalreact'
import Loading from './Loading'
import Footer from './Footer'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.searchData = this.searchData.bind(this);
        this.targetID = this.targetID.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.state = {
            loading: false,
            alert: false,
            modalShow : false,
            data: [],
            targetData: []
        }

    }

    searchData(keyword) {

        let api = "https://www.omdbapi.com/?s=" + keyword + "&apikey=e405d9ae";
        this.setState({
            loading : true
        })
        axios.get(api)
            .then((response) => {

                let dataSearch = response.data.Search;
                if (dataSearch.length > 0 && response.data.Response) {
                    this.setState({
                        data: dataSearch,
                        alert: false,
                        loading : false
                    })
                }

            }).catch((error) => {
                this.setState({
                    data: [],
                    alert: true,
                    loading:false
                })
            })

    }

    targetID(id) {
        this.setState({
            loading : true
        })
        let api = "https://www.omdbapi.com/?i=" + id + "&apikey=e405d9ae";
        axios.get(api)
            .then((response) => {

                let dataSearch = response.data;
              
                if (!!dataSearch && Object.keys(dataSearch).length) {
                    this.setState({
                        loading:false,
                        targetData : dataSearch,
                        modalShow : true
                    })
                }


            }).catch((error) => {
                this.setState({
                    loading:false
                })
            })
    }

    closePopup(bool) {
       this.setState({
           modalShow : !bool
       })
    }



    render() {
        return (
            <div className="main">
                <Header />
                <Search searchData={this.searchData} />
                <Lists stateList={this.state.data} targetID={this.targetID} />
                <Alert alertView={this.state.alert} />
                <Modalreact closePopup = {this.closePopup} targetData={this.state.targetData} modalShow={this.state.modalShow} />
                {
                    !!this.state.loading && (
                        <Loading />
                    )
                }
                <Footer />
            </div>
        )
    }
}
