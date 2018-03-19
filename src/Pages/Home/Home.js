import React, { Component } from 'react';
import Nav from '.././Components/Nav'
import Content from './Content'
import Footer from '.././Components/Footer'
import PropTypes from 'prop-types'
import './Home.css'
// import Addtodo from '../../Addtodo'
// import VisibleTodoList from '../../VisibleTodoList'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={name:'herris'}
  }
  render() {
    return (
      <div className="App">
          <Nav/>
          <Content/>
          {/* <Addtodo/> */}
          {/* <VisibleTodoList /> */}
          <Footer/> 
          
      </div>
    );
  }
  getName(){
    return this.state.name
  }
}

export default Home;
