import React, { Component } from "react";

export default class ClassComponet extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mohamed Tlili",
      counter: 0,
      img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/301710494_580649483780454_1214329976614679185_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lScKPTN4iIsAX_tFMKb&_nc_ht=scontent.ftun1-2.fna&oh=00_AfCB_jBwkKBsfwAsMTKMk-R6Rq5Ql6JHAZ4N2VhbRO78pA&oe=65638CC9",
    };
   
  }
componentDidMount(){
  console.log("did mount")
}
componentDidUpdate(){
  console.log("updait")
}
componentWillUnmount(){
  console.log("unmount")
}
 
  render() {
    return (
      <div>
        <h1>Heloo {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "Tlilos" });
          }}
        >
          change name
        </button>
        <div>
          <h1>{this.state.counter}</h1>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter + 1 });
            }}
          >
            {" "}
            +
          </button>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter - 1 });
            }}
          >
            {" "}
            -
          </button>
        </div>

        <img style={{ width: "200px" }} src={this.state.img} alt="" />
        <button
          onClick={() => {
            this.setState({
              img: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/296437947_569199224925480_5805274847103783284_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B91PRAcEOrwAX_lu0Hk&_nc_ht=scontent.ftun1-2.fna&oh=00_AfB00iAm0soWiy70p7KBI0uFGi4u-RcqifuoJSH-kd06Ag&oe=65646CF4",
            });
          }}
        >
          change img
        </button>
      </div>
    );
  }
}
