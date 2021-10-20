import { PayloadAction } from '@reduxjs/toolkit';
import { useHistory } from 'react-router';
import { all, takeEvery, takeLatest, put, call, fork } from 'redux-saga/effects'
import authenAPI from '../../api/authenApi';
import { login, loginFail, loginSuccess, saveAccessToken } from './loginSlice';




function* loginMiddleware(action: PayloadAction<any>): any {
    const { data, redirect, showError } = action.payload;
    try {
        const res = yield call(() => authenAPI.login(data));
        yield put({ type: loginSuccess.toString(), payload: res.data });
        yield put({ type: saveAccessToken.toString(), paload: { accessToken: '111111' } });
        redirect();
    } catch (error: any) {
        yield put({ type: loginFail.toString() });
        showError(error.response.data.message);
    }
}




export default function* handleLogin() {
    yield takeLatest(login.toString(), loginMiddleware);
}

