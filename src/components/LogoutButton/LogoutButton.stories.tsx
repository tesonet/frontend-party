import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { LogoutButton } from './LogoutButton';

const stories: any = storiesOf('components/LogoutButton', module);

stories.add('default', () => <LogoutButton onClick={action('clicked')}>Logout</LogoutButton>);
