import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from './DummyButton.component';


export default { title: 'Button', decorator: withKnobs };

export const withText = () => <Button text={text('buttontext', 'value')} action={action('button-click')} />;

export const withEmoji = () => <Button text="texto2" action={action('button-click')} />;