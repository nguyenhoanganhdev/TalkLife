import { signUp, signUpFailed, signUpSuccess } from '@redux/actions';
import { PayloadAction } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';
import { ForkEffect, call, put, takeLatest } from 'redux-saga/effects';
import * as api from './apiCall';
import { SignUpRequest, SignUpSuccessPayload } from './types';

function* signUpSaga({ payload }: PayloadAction<SignUpRequest>) {
  try {
    const response: SignUpSuccessPayload = yield call(api.SignUp, payload);
    if (!isEmpty(response)) {
      yield put(signUpSuccess(response));
      if (payload?.callback) yield payload?.callback(response);
    } else {
      yield put(signUpFailed());
    }
  } catch (err) {
    yield put(signUpFailed());
  }
}

function* usersSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(signUp.type, signUpSaga);
}

export default usersSaga;
