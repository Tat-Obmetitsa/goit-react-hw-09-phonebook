import { createReducer } from "@reduxjs/toolkit";
import authActions from './auth/auth-actions';
import {
  fetchContactsError,
  addContactError,
  deleteContactError
} from './contacts/contacts-actions';

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
  [fetchContactsError]: setError,
  [addContactError]: setError,
  [deleteContactError]: setError,
});

export default error;