import React from "react";

export default class Column1 extends React.Component {
  render() {
    var createItem = function(item, index) {
      var isOdd = (index % 2 == 0 ? "bg-odd" : "");
      // console.log(isOdd);
      return (
        <div class={"column "+(isOdd)} key={index}>
          <div class="column-odd">{item.text}
            <button type="button" class="btn btn-delete pull-right">x</button></div>
        </div>
      )
    }

    return (
      <div class="col-sm-4 item-column">
        <div class="column-header text-center">COLUMN 1</div>
        { this.props.items.map(createItem) }
      </div>
    );
  }
}
