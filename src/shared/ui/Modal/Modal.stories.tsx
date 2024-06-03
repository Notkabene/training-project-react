import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci architecto autem enim, est facilis illum iusto minus, molestiae molestias officia omnis praesentium provident quasi qui quibusdam, soluta tempora vitae.',
};
