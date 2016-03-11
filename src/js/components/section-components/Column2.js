import React from "react";

export default class Column2 extends React.Component {
  render() {
    var that = this;
    var createItem = function(item, index) {
      var isOdd = (index % 2 == 0 ? "bg-odd" : "");
      if (item.text.toLowerCase().indexOf(that.props.searchItem.toLowerCase()) === -1) {
        return;
      }
      return (
        <div class={"column "+(isOdd)} key={index}>
          <div class="column-odd">{item.text}
            <button
              onClick={that.props.deleteItem.bind(this, index, "2", item['.key'])}
              type="button"
              class="btn btn-delete pull-right">x</button></div>
        </div>
      )
    }
    return (
      <div class="col-md-4 col-sm-12 item-column">
        <div class="column-header text-center">COLUMN 2</div>
        { this.props.items.map(createItem) }
      </div>
    );
  }
}
