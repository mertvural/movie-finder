import React, { Component } from 'react'
import Menu from './Menu'

export default class Header extends Component {
    render() {
        return (
            <header>
              <div className="pg">
                <div className="menu-wrapper">
                  <a href="" className="navbar-brand">OMDb API</a>
                  <Menu />
                </div>
              </div>
            </header>
        )
    }
}
