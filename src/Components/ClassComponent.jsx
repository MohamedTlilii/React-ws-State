import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super();
        this.state={
            name:"tlili",
          counter : 0 ,
        }
    }
    // this.componentDidMount()=>{}

  render() {
    return (
      <div>
        <h1> {this.state.counter} </h1>
        {/* <p> {this.state.counter}</p> */}
        <button onClick={()=>{this.setState({counter :this.state.counter +1})}}>change name</button>
        <button onClick={()=>{this.setState({counter :this.state.counter -1})}}>chaeange name</button>
       
      </div>
      
    )
  }
}
