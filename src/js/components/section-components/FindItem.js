import React from "react";

export default class FindItem extends React.Component {

  handleChange(e) {
    const findItem = e.target.value;
    this.props.onSearchInput(findItem);
  }

  render() {
    // console.log("search-input: "+this.props.onSearchInput);
    // console.log("search-item: "+this.props.searchItem);
    return (
      <div class="find-item">
        <div class="search-label">SEARCH AN ITEM</div>
        <span class="fa fa-search"></span>
        <input type="text"
          value={this.props.searchItem}
          onChange={this.handleChange.bind(this)}
          placeholder="SEARCH" />
      </div>
    );
  }
}
