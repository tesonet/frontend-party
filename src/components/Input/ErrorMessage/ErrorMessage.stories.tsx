import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { ErrorMessage } from './ErrorMessage';

const stories: any = storiesOf('components/ErrorMessage', module);

stories.add('default', () => <ErrorMessage>Error occured!</ErrorMessage>);
