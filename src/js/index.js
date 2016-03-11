import React from "react";
import ReactDOM from "react-dom";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        INDEX PAGE
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Index />, app);
