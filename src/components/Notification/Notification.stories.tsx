import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Notification } from './Notification';

const stories: any = storiesOf('components/Notification', module);

stories.add('error', () => (
  <Notification message="Dummy error occured!" onClose={action('close clicked')} type="error" />
));

stories.add('warning', () => (
  <Notification message="Dummy warning message" onClose={action('close clicked')} type="warning" />
));

stories.add('success', () => (
  <Notification message="Dummy success message" onClose={action('close clicked')} type="success" />
));
