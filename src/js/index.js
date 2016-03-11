import React from "react";
import ReactDOM from "react-dom";

import '../stylesheets/style.scss';

export default class Index extends React.Component {
  render() {
    return (
      <div>


      <header>
        <div class="container">
          <div class="row">
            <h1>Marvelous!</h1>
            <div class="subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since.
            </div>
          </div>
        </div>
      </header>
      <section>
        <div class="container">
          <div class="row">
            <div class="title text-center">
              <h4>ADD AN ITEM</h4>
            </div>
            <div class="item-content">

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
          </div>
        </div>
      </section>




      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Index />, app);
