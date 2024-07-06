import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange | readOnly'>

// @ts-ignore
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  type?: string;
  id: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo((props:InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        id,
        placeholder = '',
        readonly,
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

    const mods:Mods = {
        [cls.focus]: isFocused || value,
        [cls.readonly]: readonly,
    };

    return (
        <label
            htmlFor={id}
            className={classNames(cls.label, mods, [className])}
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
                readOnly={readonly}
                {...otherProps}
            />
        </label>
    );
});
