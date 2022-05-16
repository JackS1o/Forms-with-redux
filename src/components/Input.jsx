import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, onChange, value, id, maxLength } = this.props;
    return (
      <label htmlFor={ name }>
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          maxLength={ maxLength }
          id={ id }
          placeholder={ name }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  maxLength: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  name: '',
  id: '',
  onChange: null,
  maxLength: '',
};

export default Input;
