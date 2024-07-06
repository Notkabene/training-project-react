import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    readonly?: boolean;
    value?: string;
    onChange?: (value: Country) => void;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({ readonly, value, onChange }: CountrySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            id="currency"
            readonly={readonly}
            label={t('Выберите страну')}
            onChange={onChangeHandler}
            options={options}
            value={value}
        />
    );
});
