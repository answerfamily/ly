import React from 'react';

// https://github.com/facebook/react/issues/1798#issuecomment-417047897
function Checkbox({ isIndeterminate = false, ...props }) {
  const setCheckboxRef = checkbox => {
    if (checkbox) {
      checkbox.indeterminate = isIndeterminate;
    }
  };

  return <input type="checkbox" ref={setCheckboxRef} {...props} />;
}

Checkbox.defaultProps = {
  isIndeterminate: false,
};

export default Checkbox;
