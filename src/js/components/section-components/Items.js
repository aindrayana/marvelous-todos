import React from "react";
import Reactfire from "reactfire";
import Firebase from "firebase";

import Column1 from "./Column1";
import Column2 from "./Column2";
import FindItem from "./FindItem";


export default class Items extends React.Component {

  constructor() {
    super();
    this.render = this.render.bind(this);
    this.state = {
      searchItem: '',
      text: '',
      column: '',
      itemColumn1: [],
      itemColumn2: []
    };
  }

  componentWillMount() {
    var that = this;
    this.firebaseRef = new Firebase('https://marvelous.firebaseio.com/items');
    this.firebaseRef.once('value', function(snapshot){
      var dataCol1 = [];
      var dataCol2 = [];
      snapshot.forEach(function(data){
        // Populating data column 1 -----------------
        if (data.val().column1) {
          // console.log(data.val().column1);
          var dataColumn1 = {
            id: data.val().column1.id,
            text: data.val().column1.text
          }
          dataColumn1['.key'] = data.key();
          dataCol1.push(dataColumn1);
          // console.log(dataCol1);
          that.setState({itemColumn1: dataCol1});
        }
        // Populating data column 2 -----------------
        if (data.val().column2) {
          var dataColumn2 = {
            id: data.val().column2.id,
            text: data.val().column2.text
          }
          dataColumn2['.key'] = data.key();
          dataCol2.push(dataColumn2);
          // console.log(dataCol1);
          that.setState({itemColumn2: dataCol2});
        }
      });
    })
  }

  componentWillUnmount() {
    this.firebaseRef.off();
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
        var column1 = {
          id: this.state.itemColumn1.length+1,
          text: this.state.text
        };
        this.firebaseRef.push({column1});
        this.setState({
          itemColumn1: this.state.itemColumn1.concat(column1),
          column: "CHOOSE COLUMN",
          text: ""
        });
      }
    } else {
      if (this.state.text) {
        var column2 = {
          id: this.state.itemColumn2.length+1,
          text: this.state.text
        };
        this.firebaseRef.push({column2});
        this.setState({
          itemColumn2: this.state.itemColumn2.concat(column2),
          // itemColumn2: nextItems,
          column: "CHOOSE COLUMN",
          text: ""
        });
      }
    }
    // console.log("column value:"+this.state.column);
  }

  onDelete(itemToDelete, column, key) {
    // console.log("key:"+key);
    // console.log(itemToDelete + " | column: "+ column);
    // console.log(this.firebaseRef.child(key));
    this.firebaseRef.child(key).remove();
    if (column=='1') {
      this.state.itemColumn1.splice(itemToDelete, 1);
      this.setState({ itemColumn1: this.state.itemColumn1 });
    }else{
      this.state.itemColumn2.splice(itemToDelete, 1);
      this.setState({ itemColumn2: this.state.itemColumn2 });
    }
  }

  handleSearchInput(searchItem) {
    this.setState({searchItem});
    // console.log("searchItem"+searchItem);
  }

// -----------------------------------------------------------------------------
// Render ----------------------------------------------------------------------
// -----------------------------------------------------------------------------
  render() {
    return (
      <div>
        <div class="col-md-4 col-sm-12 add-search">
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
          <FindItem
            searchItem={this.state.searchItem}
            onSearchInput={this.handleSearchInput.bind(this)}
           />
        </div>

        <Column1
          items={this.state.itemColumn1}
          searchItem={this.state.searchItem}
          deleteItem={this.onDelete.bind(this)}/>
        <Column2
          items={this.state.itemColumn2}
          searchItem={this.state.searchItem}
          deleteItem={this.onDelete.bind(this)}/>
      </div>

    );
  }
}
