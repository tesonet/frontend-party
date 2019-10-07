import { expect } from 'chai';

import { toasterManagerActions } from './actions';
import { Toaster, ToasterType } from './model';
import { toasterManagerReducers } from './reducers';

describe('toaster reducers', () => {
  it('should add success toast to queue', () => {
    const initialState = {
      toasters: [],
    };

    const toaster: Toaster = {
      text: 'my-text',
    };

    const newState = toasterManagerReducers(
      initialState,
      toasterManagerActions.success(toaster),
    );
    const { id } = newState.toasters[0];

    expect(newState).to.deep.eq({
      toasters: [{ ...toaster, id, toasterType: ToasterType.Success }],
    });
  });

  it('should add error toast to queue', () => {
    const initialState = {
      toasters: [],
    };

    const toaster: Toaster = {
      text: 'my-text',
    };

    const newState = toasterManagerReducers(
      initialState,
      toasterManagerActions.error(toaster),
    );
    const { id } = newState.toasters[0];

    expect(newState).to.deep.eq({
      toasters: [{ ...toaster, id, toasterType: ToasterType.Error }],
    });
  });

  it('should remove toast by id', () => {
    const toast: Toaster = {
      id: '123',
      text: 'my-text',
      toasterType: ToasterType.Success,
    };

    const initialState = {
      toasters: [toast],
    };

    const newState = toasterManagerReducers(
      initialState,
      toasterManagerActions.close(toast.id),
    );
    expect(newState.toasters.length).to.eq(0);
  });

  it('should remove last toast', () => {
    const firstToast: Toaster = {
      id: '123',
      text: 'first toast',
      toasterType: ToasterType.Success,
    };

    const secondToast: Toaster = {
      id: '321',
      text: 'second toast',
      toasterType: ToasterType.Success,
    };

    const initialState = {
      toasters: [secondToast, firstToast],
    };

    const newState = toasterManagerReducers(
      initialState,
      toasterManagerActions.closeLast(),
    );
    expect(newState.toasters.length).to.eq(1);
    expect(newState.toasters[0].id).to.eq(firstToast.id);
  });

  it('should remove all toast', () => {
    const firstToast: Toaster = {
      id: '123',
      text: 'first toast',
      toasterType: ToasterType.Success,
    };

    const secondToast: Toaster = {
      id: '321',
      text: 'second toast',
      toasterType: ToasterType.Success,
    };

    const initialState = {
      toasters: [firstToast, secondToast],
    };

    const newState = toasterManagerReducers(
      initialState,
      toasterManagerActions.closeAll(),
    );
    expect(newState.toasters.length).to.eq(0);
  });
});
