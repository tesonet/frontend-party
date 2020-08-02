import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ServerItem } from './ServerItem';

const stories: any = storiesOf('components/ServerItem', module);

const dummyData = { distance: 714, name: 'United States #35' };

stories.add('default', () => <ServerItem data={dummyData} />);
