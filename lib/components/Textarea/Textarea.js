import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ErrorIcon from './error.svg';
import styles from './Textarea.css';

const Textarea = forwardRef(
  ({ disabled, error, label, message, value, onChange, rows, ...textareaProps }, ref) => {
    const labelClass = classnames(styles.label, {
      [styles.errorText]: !disabled && error,
      [styles.disabled]: disabled,
    });

    const textareaClass = classnames(styles.textarea, {
      [styles.default]: !disabled && !error,
      [styles.disabled]: disabled,
      [styles.error]: !disabled && error,
    });

    const hintMessageClass = classnames(styles.message, {
      [styles.hint]: !disabled && !error,
      [styles.disabled]: disabled,
      [styles.errorText]: !disabled && error,
    });

    return (
      <div className={styles.container}>
        {label && <h2 className={labelClass}>{label}</h2>}
        <textarea
          ref={ref}
          className={textareaClass}
          disabled={disabled}
          value={value}
          onChange={onChange}
          rows={rows}
          {...textareaProps}
        />
        {message && (
          <span className={hintMessageClass}>
            {!disabled && error && <ErrorIcon />} {message}
          </span>
        )}
      </div>
    );
  },
);

Textarea.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  label: undefined,
  disabled: false,
  error: false,
  message: undefined,
  value: undefined,
  onChange: undefined,
  rows: 3,
};

export default Textarea;
