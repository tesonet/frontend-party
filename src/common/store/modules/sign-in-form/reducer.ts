import { createReducer, set, setByKey } from 'common/utils/redux';
import { combineReducers } from 'redux';
import { SET_ERROR, SET_IS_VALID, SET_STATUS, SET_VALUE } from './constants';
import { IField, IFields, IState, Status } from './types';

const statusReducer = createReducer<Status>(
  {
    [SET_STATUS]: set
  },
  Status.Idle
);

const defaultFieldState: IField = {
  error: null,
  isValid: true,
  value: null
};

const createFieldValueReducer = (fieldName: keyof IFields) =>
  createReducer<string | null>(
    {
      [SET_VALUE]: setByKey(fieldName)
    },
    defaultFieldState.value
  );

const createFieldIsValidReducer = (fieldName: keyof IFields) =>
  createReducer<boolean>(
    {
      [SET_IS_VALID]: setByKey(fieldName)
    },
    defaultFieldState.isValid
  );

const createFieldErrorReducer = (fieldName: keyof IFields) =>
  createReducer<string | null>(
    {
      [SET_ERROR]: setByKey(fieldName)
    },
    defaultFieldState.error
  );

const createFieldReducer = (fieldName: keyof IFields) =>
  combineReducers<IField>({
    value: createFieldValueReducer(fieldName),
    isValid: createFieldIsValidReducer(fieldName),
    error: createFieldErrorReducer(fieldName)
  });

const reducer = combineReducers<IState>({
  fields: combineReducers<IFields>({
    username: createFieldReducer('username'),
    password: createFieldReducer('password')
  }),
  status: statusReducer
});

export default reducer;
