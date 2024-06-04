import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, InputHTMLAttributes, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  type?: string;
  id: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        children,
        value,
        type = 'text',
        id,
        placeholder = '',
        onChange,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <label
            htmlFor={id}
            className={classNames(cls.label, { [cls.focus]: isFocused || value }, [className])}
        >
            {placeholder && <span className={cls.placeholder}>{placeholder}</span>}

            <input
                id={id}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.Input}
                onFocus={handleOnFocus}
                onBlur={handleBlur}
                {...otherProps}
            />
        </label>
    );
};
