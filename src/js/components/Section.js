import React from "react";

import Title from "./section-components/Title";
import Items from "./section-components/Items";

export default class Section extends React.Component {
  render() {
    return (
      <section>
        <div class="container">
          <div class="row">
            <div class="item-content">
              <Title />
              <Items />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
