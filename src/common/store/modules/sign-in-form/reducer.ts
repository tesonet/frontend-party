import { createReducer, set, setByKey } from 'common/utils/redux';
import { combineReducers } from 'redux';
import {
  SET_ERROR,
  SET_FIELD_ERROR,
  SET_FIELD_IS_VALID,
  SET_FIELD_VALUE,
  SET_STATUS
} from './constants';
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
      [SET_FIELD_VALUE]: setByKey(fieldName)
    },
    defaultFieldState.value
  );

const createFieldIsValidReducer = (fieldName: keyof IFields) =>
  createReducer<boolean>(
    {
      [SET_FIELD_IS_VALID]: setByKey(fieldName)
    },
    defaultFieldState.isValid
  );

const createFieldErrorReducer = (fieldName: keyof IFields) =>
  createReducer<string | null>(
    {
      [SET_FIELD_ERROR]: setByKey(fieldName)
    },
    defaultFieldState.error
  );

const errorReducer = createReducer<string | null>(
  {
    [SET_ERROR]: set
  },
  null
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
  status: statusReducer,
  error: errorReducer
});

export default reducer;
