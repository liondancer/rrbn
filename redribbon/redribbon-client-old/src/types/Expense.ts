import { Error } from "./Error";

export interface Expense {
  id: string;
  name: string;
  description: string;
  amount: number;
  createdAt: number;
}

export interface ExpenseState {
  readonly isFetching: boolean;
  readonly errors: Error[];
  readonly expenses: Expense[];
}

export const ADD_EXPENSE_SUCCESS = "ADD_EXPENSE_SUCCESS";
export const REMOVE_EXPENSE_SUCCESS = "REMOVE_EXPENSE_SUCCESS";
export const EDIT_EXPENSE_SUCCESS = "EDIT_EXPENSE_SUCCESS";
export const SET_EXPENSES_SUCCESS = "SET_EXPENSES_SUCCESS";

export const ADD_EXPENSE_REQUEST = "ADD_EXPENSE_REQUEST";
export const REMOVE_EXPENSE_REQUEST = "REMOVE_EXPENSE_REQUEST";
export const EDIT_EXPENSE_REQUEST = "EDIT_EXPENSE_REQUEST";
export const SET_EXPENSES_REQUEST = "SET_EXPENSES_REQUEST";

export const ADD_EXPENSE_FAILURE = "ADD_EXPENSE_FAILURE";
export const REMOVE_EXPENSE_FAILURE = "REMOVE_EXPENSE_FAILURE";
export const EDIT_EXPENSE_FAILURE = "EDIT_EXPENSE_FAILURE";
export const SET_EXPENSES_FAILURE = "SET_EXPENSES_FAILURE";

// export interface SetExpensesSuccessAction {
//   type: typeof SET_EXPENSES_SUCCESS;
//   isFetching: boolean;
//   expenses: Expense[];
// }

// export interface SetExpensesRequestAction {
//   type: typeof SET_EXPENSES_REQUEST;
//   isFetching: boolean;
// }

// export interface SetExpensesFailureAction {
//   type: typeof SET_EXPENSES_FAILURE;
//   isFetching: boolean;
//   error: Error;
// }

export interface EditExpenseSuccessAction {
  type: typeof EDIT_EXPENSE_SUCCESS;
  isFetching: boolean;
  expense: Expense;
}

export interface EditExpenseRequestAction {
  type: typeof EDIT_EXPENSE_REQUEST;
  isFetching: boolean;
}

export interface EditExpenseFailureAction {
  type: typeof EDIT_EXPENSE_FAILURE;
  isFetching: boolean;
  error: Error;
}

export interface RemoveExpenseRequestAction {
  type: typeof REMOVE_EXPENSE_REQUEST;
  isFetching: boolean;
}

export interface RemoveExpenseSuccessAction {
  type: typeof REMOVE_EXPENSE_SUCCESS;
  isFetching: boolean;
  id: string;
}

export interface RemoveExpenseFailureAction {
  type: typeof REMOVE_EXPENSE_FAILURE;
  isFetching: boolean;
  error: Error;
}

export interface AddExpenseRequestAction {
  type: typeof ADD_EXPENSE_REQUEST;
  isFetching: boolean;
}

export interface AddExpenseSuccessAction {
  type: typeof ADD_EXPENSE_SUCCESS;
  isFetching: boolean;
  expense: Expense;
}

export interface AddExpenseFailureAction {
  type: typeof ADD_EXPENSE_FAILURE;
  isFetching: boolean;
  error: Error;
}

export type ExpenseActionTypes =
  // | SetExpensesFailureAction
  // | SetExpensesRequestAction
  // | SetExpensesSuccessAction
  | EditExpenseFailureAction
  | EditExpenseRequestAction
  | EditExpenseSuccessAction
  | AddExpenseFailureAction
  | AddExpenseRequestAction
  | AddExpenseSuccessAction
  | RemoveExpenseFailureAction
  | RemoveExpenseRequestAction
  | RemoveExpenseSuccessAction;
