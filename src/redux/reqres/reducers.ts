import { signUp } from '@redux/actions';
import { createReducer } from '@reduxjs/toolkit';
import { CategoriesPayload } from './types';

export interface AuthState {
  signUp: {
    loading: boolean;
  };
}

const initialState: AuthState = {
  signUp: {
    loading: false,
  },
};

export const authReducer = createReducer(initialState, builder => {
  builder.addCase(signUp.type, state => {
    state.signUp.loading = true;
  });
});

export interface CategoriesState {
  selectedCategories: CategoriesPayload[];
}

const initialCategoriesState: CategoriesState = {
  selectedCategories: [],
};

export const categoriesReducer = createReducer(initialCategoriesState, builder => {
  builder.addCase(signUp.type, state => {
    state.selectedCategories = [];
  });
});
