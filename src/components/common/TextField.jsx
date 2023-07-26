import React from 'react';
import './textField.scss';

export const TextField = ({
    placeholder,
    isDisabled = false,
    isReadOnly = false,
    isClearable = false,
    className,
    value,
    onChange,
    classNamePrefix = "",
    name,
    focused = false,
    required,
    type = "text",
    icon,
    featureIcon,
    labelTitle,
    onClick,
    onKeyDown,
}) => {
    return (
        <>
            <div id="textfield-wrapper" className={className}>
                <input
                    type={type}
                    placeholder={placeholder}
                    autoComplete='nope'
                    value={value}
                    disabled={isDisabled || isReadOnly}
                    onChange={onChange}
                    isClearable={isClearable}
                    classNamePrefix={classNamePrefix}
                    name={name}
                    autoFocus={focused}
                    required={required}
                    onKeyDown={onKeyDown}
                />
                 <span>{icon}</span>
            </div>
        </>
    );
};
