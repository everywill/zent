import React from 'react';
import Checkbox from 'zent-checkbox';
import getControlGroup from '../getControlGroup';
import unknownProps from '../unknownProps';
import omit from 'zent-utils/lodash/omit';

const CheckboxGroup = Checkbox.Group;
const CheckboxGroupWrap = props => {
  const passableProps = omit(props, unknownProps);
  return <CheckboxGroup className="zent-form__checkbox-group" {...passableProps} />;
};
const CheckboxGroupField = getControlGroup(CheckboxGroupWrap);

export default CheckboxGroupField;
