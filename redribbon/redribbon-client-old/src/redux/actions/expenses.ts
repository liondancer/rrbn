import {
  Expense,
  ADD_EXPENSE_FAILURE,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_REQUEST,
  REMOVE_EXPENSE_SUCCESS,
  REMOVE_EXPENSE_FAILURE,
  REMOVE_EXPENSE_REQUEST,
  EDIT_EXPENSE_SUCCESS,
  EDIT_EXPENSE_FAILURE,
  EDIT_EXPENSE_REQUEST,
  // SET_EXPENSES_SUCCESS,
  // SET_EXPENSES_FAILURE,
  // SET_EXPENSES_REQUEST,
  ExpenseActionTypes,
} from "../../types/Expense";

import { Error } from "../../types/Error";
import { Dispatch } from "redux";
import { AppActions } from "../../types/AppActionTypes";
import { AppState } from "../store/store";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const addExpenseRequest = (): AppActions => ({
  type: ADD_EXPENSE_REQUEST,
  isFetching: true,
});

export const addExpenseFailure = (error: Error): ExpenseActionTypes => ({
  type: ADD_EXPENSE_FAILURE,
  isFetching: false,
  error,
});

export const addExpenseSuccess = (expense: Expense): AppActions => ({
  type: ADD_EXPENSE_SUCCESS,
  isFetching: false,
  expense,
});

export const removeExpenseRequest = (): AppActions => ({
  type: REMOVE_EXPENSE_REQUEST,
  isFetching: true,
});

export const removeExpenseFailure = (error: Error): AppActions => ({
  type: REMOVE_EXPENSE_FAILURE,
  isFetching: false,
  error,
});

export const removeExpenseSuccess = (id: string): AppActions => ({
  type: REMOVE_EXPENSE_SUCCESS,
  isFetching: false,
  id,
});

export const editExpenseRequest = (expense: Expense): AppActions => ({
  type: EDIT_EXPENSE_REQUEST,
  isFetching: true,
});

export const editExpenseSuccess = (expense: Expense): AppActions => ({
  type: EDIT_EXPENSE_SUCCESS,
  isFetching: false,
  expense,
});

export const editExpenseFailure = (error: Error): AppActions => ({
  type: EDIT_EXPENSE_FAILURE,
  isFetching: false,
  error,
});

// export const setExpensesRequest = (expenses: Expense[]): AppActions => ({
//   type: SET_EXPENSES_REQUEST,
//   isFetching: true,
//   expenses,
// });

// export const setExpensesSuccess = (expenses: Expense[]): AppActions => ({
//   type: SET_EXPENSES_SUCCESS,
//   isFetching: false,
//   expenses,
// });

// export const setExpensesFailure = (error: Error): AppActions => ({
//   type: SET_EXPENSES_FAILURE,
//   isFetching: false,
//   error,
// });

export const addExpense = (expenseData: {
  name: string;
  description: string;
  amount: number;
  createdAt: number;
}) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const {
      name = "",
      description = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { name, description, amount, createdAt };
    const id = uuidv4();
    dispatch(addExpenseRequest());
    axios.post("http://localhost:3000");
  };
};
