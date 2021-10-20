import { PayloadAction } from '@reduxjs/toolkit';
import { all, takeEvery, takeLatest, put, call, fork } from 'redux-saga/effects'
import authenAPI from '../api/authenApi';

import { login, loginFail, loginSuccess } from '../features/Login/loginSlice';
import handleLogin from '../features/Login/loginSaga';


export default function* rootSaga() {
    console.log("Root");
    yield all([handleLogin()]);
}