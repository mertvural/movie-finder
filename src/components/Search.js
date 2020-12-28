import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.changeData = this.changeData.bind(this);
        this.state = {
            keyword : ""
        }
    }

    submitForm(e) {
        e.preventDefault()
    }


    changeData(e) {
        e.preventDefault();

        this.setState({
            keyword : e.target.value
        })
        
        this.props.searchData(e.target.value)

    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="pg mt-3 mb-3 search-capsul relative">
                <input type="text" value={this.state.keyword} name="search" placeholder="FİLM YADA DİZİ ARAYIN.." onChange={this.changeData} autoComplete="off" />
                 <button className="style3">ARA</button>
                </div>
            </form>
        )
    }
}
