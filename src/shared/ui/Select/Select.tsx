import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    ChangeEvent, memo, useMemo, useState,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    id: string;
    readonly?: boolean;
    label?: string;
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
}
export const Select = memo((props: SelectProps) => {
    const {
        className,
        id,
        readonly,
        label,
        options,
        value,
        onChange,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods:Mods = {
        [cls.readonly]: readonly,
    };

    const optionsList = useMemo(() => options?.map((item) => (
        <option value={item.value} key={item.value}>
            {item.content}
        </option>
    )), [options]);

    return (
        <label
            htmlFor={id}
            className={classNames(cls.label, mods, [className])}
        >
            {label && <span className={cls.placeholder}>{label}</span>}

            <select
                className={cls.Select}
                name={`select_${id}`}
                id={id}
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </label>
    );
});
