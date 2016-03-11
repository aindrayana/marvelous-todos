import React from "react";
import ReactDOM from "react-dom";

import '../stylesheets/style.scss';
import '../stylesheets/header.scss';
import '../stylesheets/section.scss';
import '../stylesheets/item-column.scss';

import Header from "./components/Header";
import Section from "./components/Section";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Index />, app);
