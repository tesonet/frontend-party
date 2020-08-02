import * as React from 'react';
import { storiesOf } from '@storybook/react';
import withFormik from 'storybook-formik';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { UserIcon } from '@components/Icons/UserIcon';
import { Input } from './Input';

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${themeGet('colors.darkBg')};
  padding: 30px;
`;

const stories: any = storiesOf('components/Input', module)
  .addDecorator(withFormik)
  .addDecorator(story => <Background>{story()}</Background>);

stories.add('default', () => <Input name="username" id="username" placeholder="Username" type="text" />);
stories.add('with icon', () => (
  <Input name="username" id="username" placeholder="Username" type="text" icon={<UserIcon />} />
));
