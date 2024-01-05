import { createAction } from '@reduxjs/toolkit';
import { CategoriesPayload, SignUpRequest, SignUpSuccessPayload, UserProfile } from './types';

export const signUp = createAction<SignUpRequest>('ACTION/SIGN_UP');
export const signUpSuccess = createAction<SignUpSuccessPayload>('ACTION/SIGN_UP_SUCCESS');
export const signUpFailed = createAction('ACTION/SIGN_UP_FAILED');

export const setUserInfo = createAction<UserProfile>('ACTION/SET_USER_INFO');

export const setCategories = createAction<CategoriesPayload>('ACTION/SET_CATEGORIES');
