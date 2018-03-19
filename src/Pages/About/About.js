import React, { Component } from 'react';
import Nav from '.././Components/Nav'
import Content from './Content'
import Footer from '.././Components/Footer'
class About extends Component {
  constructor(props){
    super(props)
    this.state={name:'herris'}
  }
  render() {
    return (
      <div className="App">
          <Nav/>
          <Content/>
          <Footer/>
      </div>
    );
  }
}

export default About;
