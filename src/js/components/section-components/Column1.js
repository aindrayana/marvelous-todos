import React from "react";

export default class Column1 extends React.Component {
  render() {
    var that = this;
    var createItem = function(item, index) {
      var isOdd = (index % 2 == 0 ? "bg-odd" : "");
      // console.log(isOdd);

      // console.log("items :"+ item.text.toLowerCase());
      // console.log("search-items :"+ that.props.searchItem);
      if (item.text.toLowerCase().indexOf(that.props.searchItem.toLowerCase()) === -1) {
        return;
      }

      return (
        <div class={"column "+(isOdd)} key={index}>
          <div class="column-odd">{item.text}
            <button
              onClick={that.props.deleteItem.bind(this, index, "1")}
              type="button"
              class="btn btn-delete pull-right">x</button></div>
        </div>
      )
    }
    return (
      <div class="col-md-4 col-sm-12 item-column">
        <div class="column-header text-center">COLUMN 1</div>
        { this.props.items.map(createItem) }
      </div>
    );
  }
}
