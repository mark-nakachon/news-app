import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name, checked = false, onChange }) => (
  <div class="custom-control custom-checkbox custom-control-inline">
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
    <label class="custom-control-label">{name}</label>
  </div>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
