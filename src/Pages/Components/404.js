import React, { Component } from 'react';
import Navbar from './Nav'
import Footer from './Footer'

class NotFound extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <div className="wrapper">
                <div className="container-fluid" id="top-container-fluid-nav">
                    <div className="container">	
                    </div>
                </div> 
                <div className="container-fluid" id="body-container-fluid">
                    <div className="container">
                            <div className="jumbotron">
                            <h1 className="display-1">4<i className="fa  fa-spin fa-cog fa-3x"></i> 4</h1>
                            <h1 className="display-3">ERROR</h1>
                            <p className="lower-case">Webpage not found</p>
                            </div>
                    </div>
                </div>
                <div className="container-fluid" id="footer-container-fluid">
                    <div className="container">
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}
export default NotFound;
