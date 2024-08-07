import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { colors } from '@storybook/addon-interactions/dist/ts3.9/theme';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');
    const onChange = (value: string) => {
        setValue(value);
    };
    return (
        <div>
            {t('Главная страница')}
            <br />
            <Input id="test" onChange={onChange} value={value} placeholder={t('Some text')} />
        </div>
    );
};

export default MainPage;
