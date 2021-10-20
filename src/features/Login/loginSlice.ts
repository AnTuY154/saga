import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import history from '../../history';

export interface userState {
    userName: string,
    isLogin: boolean,
    loading: boolean
}

const initialState: userState = {
    userName: '',
    isLogin: false,
    loading: false
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const loginSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            console.log("Login....");
            state.loading = true;
        },
        loginSuccess(state, action: PayloadAction<any>) {
            state.userName = action.payload
            state.isLogin = true;
            state.loading = false;
            console.log("login sucess");
        },
        loginFail(state, action: PayloadAction<any>) {
            console.log("login fail");
            state.loading = false;
        },
        saveAccessToken(state, action: PayloadAction<any>) {
            console.log("Save here");
        }
    },
});

export const { login, loginSuccess, loginFail, saveAccessToken } = loginSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getUser = (state: RootState) => state.user;



// export const getUser = (state: RootState) => state.user;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default loginSlice.reducer;
