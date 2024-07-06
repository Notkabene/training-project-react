import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 160,
    src: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614558381_33-p-chelovechki-na-belom-fone-35.jpg',
};

export const Small = Template.bind({});
Small.args = {
    size: 60,
    src: AvatarImg,
};
