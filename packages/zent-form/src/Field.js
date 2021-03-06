/* eslint-disable no-underscore-dangle */

import { Component, PropTypes, createElement } from 'react';
import isEqual from 'zent-utils/lodash/isEqual';
import omit from 'zent-utils/lodash/omit';
import { getValue } from './utils';
import unknownProps from './unknownProps';

class Field extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    normalize: PropTypes.func
  }

  // validationError为默认错误提示
  // validationErrors为指定校验规则所对应的错误提示
  static defaultProps = {
    validationError: '',
    validationErrors: {}
  }

  static contextTypes = {
    zentForm: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    if (!context.zentForm) {
      throw new Error('Field must be in zent-form');
    }
    this.state = {
      _value: props.value,
      _isValid: true,
      _isPristine: true,
      _isValidating: false,
      _pristineValue: props.value,
      _validationError: [],
      _externalError: null
    };
    this._validations = props.validations || {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(nextState, this.state) || !isEqual(nextProps, this.props);
  }

  componentWillMount() {
    if (!this.props.name) {
      throw new Error('Form Field requires a name property when used');
    }
    this.context.zentForm.attachToForm(this);
  }

  componentWillReceiveProps(nextProps) {
    if ('validations' in nextProps) {
      this._validations = nextProps.validations;
    }
  }

  componentDidUpdate(prevProps) {
    // 支持props中的value动态更新
    if (!isEqual(this.props.value, prevProps.value)) {
      this.setValue(this.props.value);
    }

    // 动态改变validation方法，重新校验
    // if (!isEqual(this.props.validations, prevProps.validations)) {
    //   this.context.zentForm.validate(this)
    // }
  }

  componentWillUnmount() {
    this.context.zentForm.detachFromForm(this);
  }

  isPristine = () => {
    return this.state._isPristine;
  }

  isValid = () => {
    return this.state._isValid;
  }

  isValidating = () => {
    return this.state._isValidating;
  }

  isActive = () => {
    return this.state._active;
  }

  getPristineValue = () => {
    return this.state._pristineValue;
  }

  getValue = () => {
    return this.state._value;
  }

  setValue = (value) => {
    this.setState({
      _value: value,
      _isPristine: false
    }, () => {
      this.context.zentForm.validate(this);
    });
  }

  resetValue = () => {
    this.setState({
      _value: this.state._pristineValue,
      _isPristine: true
    }, () => {
      this.context.zentForm.validate(this);
    });
  }

  getWrappedComponent = () => {
    return this.wrappedComponent;
  }

  getErrorMessage = () => {
    const errors = this.getErrorMessages();
    return errors.length ? errors[0] : null;
  }

  getErrorMessages = () => {
    const { _externalError, _validationError } = this.state;
    return !this.isValid() ? (_externalError || _validationError || []) : [];
  }

  normalize = (value) => {
    const { normalize } = this.props;
    if (!normalize) {
      return value;
    }
    const previousValues = this.context.zentForm.getFormValues();
    const previousValue = this.getValue();
    const nextValues = {
      ...previousValues,
      [this.props.name]: value
    };
    return normalize(value, previousValue, nextValues, previousValues);
  }

  format = (value) => {
    const { format } = this.props;
    if (!format) {
      return value;
    }
    return format(value);
  }

  handleChange = (event) => {
    const { onChange } = this.props;
    const previousValue = this.getValue();
    const newValue = this.normalize(getValue(event));
    let preventSetValue = false;

    // 在传入的onChange中可以按需阻止更新value值
    if (onChange) {
      onChange(event, newValue, previousValue, () => (preventSetValue = true));
    }

    if (!preventSetValue) {
      this.setValue(newValue);
    }
  }

  handleFocus = (event) => {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus(event);
    }

    this.setState({
      _active: true
    });
  }

  handleBlur = (event) => {
    const { onBlur, asyncValidation } = this.props;
    const previousValue = this.getValue();
    const newValue = this.normalize(getValue(event));
    let preventSetValue = false;

    if (onBlur) {
      onBlur(event, newValue, previousValue, () => (preventSetValue = true));
    }

    this.setState({
      _active: false
    });

    if (!preventSetValue) {
      this.setValue(newValue);
      if (asyncValidation) {
        this.context.zentForm.asyncValidate(this, newValue);
      }
    }
  }

  processProps = (props) => {
    const { type, value, ...rest } = props;
    if (type === 'checkbox') {
      return {
        ...rest,
        checked: !!value,
        type
      };
    }
    if (type === 'file') {
      return {
        ...rest,
        type
      };
    }

    return props;
  }

  render() {
    const { component, ...rest } = this.props;
    const passableProps = this.processProps({
      ...rest,
      ref: (ref) => {
        this.wrappedComponent = ref;
      },
      isTouched: !this.isPristine(),
      isPristine: this.isPristine(),
      isValid: this.isValid(),
      isActive: this.isActive(),
      value: this.format(this.getValue()),
      error: this.getErrorMessage(),
      errors: this.getErrorMessages(),
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus
    });

    // 原生的标签不能传非标准属性进去
    if (typeof component === 'string') {
      return createElement(component, {
        ...omit(passableProps, unknownProps)
      });
    }

    return createElement(component, passableProps);
  }
}

export default Field;
