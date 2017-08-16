import React from 'react';
import renderer from 'react-test-renderer';
import { Button, Input } from '../components/ui';
import { ServerRow } from '../components/servers';
import { LoginForm } from '../components/login';
import { shallow } from 'enzyme';

test('Basic button renders without crash', () => {
  const component = renderer.create(
    <Button onClick={() => console.log('I was clicked')}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the onClick
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Basic Input renders without crash', () => {
  const component = renderer.create(
    <Input type={'password'} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Basic ServerRow renders without crash', () => {
  const component = renderer.create(
    <ServerRow />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Basic LoginForm renders without crash', () => {
  const component = renderer.create(
    <LoginForm onSubmit={() => console.log('Submit clicked')} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the onClick
  tree.props.onSubmit();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/* Testing props of components */
describe('Component prop tests', () => {
  it('should render Button with text & type props', done => {
    const wrapper = shallow(
      <Button text={'Test'} type={'submit'}/>
    );

    expect(wrapper.props().type).toEqual('submit');
    expect(wrapper.text()).toEqual('Test');
    done();
  });


  it('should render Input with icon, placeholder & type props', done => {
    const wrapper = shallow(
      <Input type={'password'} icon={'lock'} placeholder={'Password'}/>
    );

    const input = wrapper.find('input');
    const iconClassName = wrapper.find('i').props().className;

    expect(iconClassName.indexOf('fa-lock')).not.toBe(-1);
    expect(input.props().placeholder).toEqual('Password');
    expect(input.props().type).toEqual('password');
    done();
  });

  it('should render ServerRow with distance & name props', done => {
    const wrapper = shallow(
      <ServerRow name={'Test'} distance={123}/>
    );

    expect(wrapper.find('span.name').text()).toEqual('Test');
    expect(wrapper.find('span.distance').text()).toEqual('123 km');
    done();
  });
});
