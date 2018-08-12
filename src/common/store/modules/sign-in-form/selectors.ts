import { IAppState } from 'common/store/types';

const getFieldKeys = (state: IAppState) => Object.keys(state.signInForm.fields);

export const isAllFieldsValid = (state: IAppState): boolean =>
  getFieldKeys(state).every(
    fieldKey => state.signInForm.fields[fieldKey]!.isValid
  );
