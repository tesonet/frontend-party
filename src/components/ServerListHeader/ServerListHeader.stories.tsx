import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ServerListHeader } from './ServerListHeader';

const stories: any = storiesOf('components/ServerListHeader', module);

stories.add('default', () => <ServerListHeader onSortClick={action('sort by clicked')} />);
