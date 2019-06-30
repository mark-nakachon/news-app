import React, { Component } from "react";
import Checkbox from "./Checkbox";

class CheckBoxContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map()
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  }
  render() {
    return (
      <React.Fragment>
        <Checkbox
          name="general"
          checked={this.state.checkedItems.get("general")}
          onChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default CheckBoxContainer;
