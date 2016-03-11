import React from "react";

import Title from "./section-components/Title";
import AddItem from "./section-components/AddItem";

export default class Section extends React.Component {
  render() {
    return (
      <section>
        <div class="container">
          <div class="row">
            <div class="item-content">
              <Title />
              <AddItem />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
