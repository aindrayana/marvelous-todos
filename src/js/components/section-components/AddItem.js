import React from "react";

export default class AddItem extends React.Component {
  render() {
    return (

      <div>
        <div class="col-sm-4 add-search">
          <div class="add-item">
            <form>
              <input type="text" placeholder="ENTER ITEM" />
              <select>
                <option value="" disabled selected hidden>CHOOSE COLUMN</option>
                <option>COLUMN 1</option>
                <option>COLUMN 2</option>
              </select>
              <div class="btn-pos">
                <button type="button" class="btn btn-custom">ADD ITEM</button>
              </div>
            </form>
          </div>
          <div class="find-item">
            <div class="search-label">SEARCH AN ITEM</div>
            <span class="fa fa-search"></span>
            <input type="text" placeholder="SEARCH" />
          </div>
        </div>

        <div class="col-sm-4 item-column">
          <div class="column-header text-center">COLUMN 1</div>
          <div class="column bg-odd">
            <div class="column-odd">ITEM #1 <button type="button" class="btn btn-delete pull-right">x</button></div>
          </div>
          <div class="column">
            <div class="column-even">ITEM #2 <button type="button" class="btn btn-delete pull-right">x</button></div>
          </div>
          <div class="column bg-odd">
            <div class="column-odd">ITEM #3 <button type="button" class="btn btn-delete pull-right">x</button></div>
          </div>
          <div class="column">
            <div class="column-even">ITEM #4 <button type="button" class="btn btn-delete pull-right">x</button></div>
          </div>
          <div class="column bg-odd">
            <div class="column-odd">ITEM #5 <button type="button" class="btn btn-delete pull-right">x</button></div>
          </div>

        </div>


        <div class="col-sm-4 item-column">
          <div class="column-header text-center">COLUMN 2</div>
          <div class="column bg-odd">
            <div class="column-odd">ITEM #1 <button type="button" class="btn btn-delete pull-right">x</button></div>
          </div>
          <div class="column">
            <div class="column-even">ITEM #2 <button type="button" class="btn btn-delete pull-right">x</button></div>
          </div>
          <div class="column bg-odd">
            <div class="column-odd">ITEM #3 <button type="button" class="btn btn-delete pull-right">x</button></div>
          </div>
        </div>
      </div>

    );
  }
}
