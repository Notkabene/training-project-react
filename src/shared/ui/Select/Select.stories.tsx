import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: 'select',
    options: [
        { value: '1232', content: 'Первый пункт' },
        { value: '9595959', content: 'Второй пункт' },
    ],
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    id: 'select',
    readonly: true,
    options: [
        { value: '1232', content: 'Первый пункт' },
        { value: '9595959', content: 'Второй пункт' },
    ],
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    id: 'select',
    label: 'Выберите город',
    options: [
        { value: '1232', content: 'Первый пункт' },
        { value: '9595959', content: 'Второй пункт' },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    id: 'select',
    options: [
        { value: '1232', content: 'Первый пункт' },
        { value: '9595959', content: 'Второй пункт' },
    ],
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
