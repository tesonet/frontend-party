import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Header } from './Header';

const stories: any = storiesOf('components/Header', module);

stories.add('default', () => <Header onLogout={action('logout clicked')} />);
