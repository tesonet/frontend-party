import React from 'react';
import {mount} from 'enzyme';

import {getStore, Container} from '../test-helpers';
import * as s from '../selectors';
import withDataLoader from './withDataLoader';


describe('withDataLoader', () => {
  const RESOURCE_NAME = 'DUMMY_COMPONENT';
  const DummyComponent = () => (
    <div>DummyComponent</div>
  );
  const createComponent = props => withDataLoader({...props, name: RESOURCE_NAME})(DummyComponent);

  it('calls data loader', (done) => {
    const loaderMock = jest.fn();
    const EnhancedDummyComponent = createComponent({loader: loaderMock});

    mount(
      <Container>
        <EnhancedDummyComponent />
      </Container>,
    );

    expect(loaderMock.mock.calls.length).toBe(0);
    setImmediate(() => {
      expect(loaderMock.mock.calls.length).toBe(1);
      done();
    });
  });


  it('saves data loader\'s response to state', (done) => {
    const data = {name: 'Karolis'};
    const store = getStore();
    const EnhancedDummyComponent = createComponent({loader: async () => data});

    mount(
      <Container store={store}>
        <EnhancedDummyComponent />
      </Container>,
    );

    expect(s.data(store.getState(), RESOURCE_NAME)).toEqual(null);
    setImmediate(() => {
      expect(s.data(store.getState(), RESOURCE_NAME)).toEqual(data);
      done();
    });
  });
});
