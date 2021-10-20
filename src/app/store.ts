import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import usersReducer from '../features/counter/dataSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import questionsReducer from '../features/demoTable/questionsSlice';
import loginReducer from '../features/Login/loginSlice';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    user: loginReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
