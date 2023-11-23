import React, { Component } from "react";
import ClassComponet from "./Components/ClassComponent";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.show && <ClassComponet />}
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {" "}
          show
        </button>
      </div>
    );
  }
}
