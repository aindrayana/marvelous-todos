import React from "react";

import Column1 from "./Column1";
import Column2 from "./Column2";

export default class AddItem extends React.Component {

  constructor() {
    super();
    this.render = this.render.bind(this);
    this.state = {
      text: '',
      column: '',
      itemColumn1: [],
      itemColumn2: []
    };
  }

  onChange(e) {
    // console.log("text: "+e.target.value);
    this.setState({text: e.target.value});
  }

  onSelect(e) {
    // console.log("column: "+e.target.value);
    this.setState({column: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log("handleSubmit-text: "+this.state.text);
    if (this.state.column=='column1') {
      if (this.state.text) {
        var nextItems = this.state.itemColumn1.concat([{
          text: this.state.text
        }]);
        this.setState({
          itemColumn1: nextItems,
          column: "CHOOSE COLUMN",
          text: ""
        });
      }
    }else{
      if (this.state.text) {
        var nextItems = this.state.itemColumn2.concat([{
          text: this.state.text
        }]);
        this.setState({
          itemColumn2: nextItems,
          column: "CHOOSE COLUMN",
          text: ""
        });
      }
    }
    // console.log("column value:"+this.state.column);

  }
  render() {
    return (
      <div>
        <div class="col-sm-4 add-search">
          <div class="add-item">
            <form onSubmit={ this.handleSubmit.bind(this) }>
              <input type="text" placeholder="ENTER ITEM"
                 onChange={ this.onChange.bind(this) } value={ this.state.text }/>
              <select
                onChange={ this.onSelect.bind(this) } value={ this.state.column }>
                <option value="" disabled selected hidden>CHOOSE COLUMN</option>
                <option value="column1">COLUMN 1</option>
                <option value="column2">COLUMN 2</option>
              </select>
              <div class="btn-pos">
                <button class="btn btn-custom">ADD ITEM</button>
              </div>
            </form>
          </div>
          <div class="find-item">
            <div class="search-label">SEARCH AN ITEM</div>
            <span class="fa fa-search"></span>
            <input type="text" placeholder="SEARCH" />
          </div>
        </div>

        <Column1 items={this.state.itemColumn1}/>
        <Column2 items={this.state.itemColumn2} />

      </div>

    );
  }
}
