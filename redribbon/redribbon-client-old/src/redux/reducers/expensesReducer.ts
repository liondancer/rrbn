import {
  Expense,
  ExpenseState,
  REMOVE_EXPENSE_SUCCESS,
  REMOVE_EXPENSE_FAILURE,
  REMOVE_EXPENSE_REQUEST,
  EDIT_EXPENSE_SUCCESS,
  EDIT_EXPENSE_FAILURE,
  EDIT_EXPENSE_REQUEST,
  // SET_EXPENSES_FAILURE,
  // SET_EXPENSES_SUCCESS,
  // SET_EXPENSES_REQUEST,
  ExpenseActionTypes,
  ADD_EXPENSE_REQUEST,
  ADD_EXPENSE_FAILURE,
  ADD_EXPENSE_SUCCESS,
} from "../../types/Expense";

const expensesReducerDefaultState: ExpenseState = {
  isFetching: false,
  errors: [],
  expenses: [],
  // status: null,
  // expenses: null,
};

export const expenseReducer = (
  state = expensesReducerDefaultState,
  action: ExpenseActionTypes
): ExpenseState => {
  switch (action.type) {
    case ADD_EXPENSE_REQUEST:
    case REMOVE_EXPENSE_REQUEST:
    case EDIT_EXPENSE_REQUEST:
      // case SET_EXPENSES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ADD_EXPENSE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case REMOVE_EXPENSE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    // case SET_EXPENSES_FAILURE:
    //   return {
    //     ...state,
    //     isFetching: false,
    //   };
    case EDIT_EXPENSE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case ADD_EXPENSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case REMOVE_EXPENSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case EDIT_EXPENSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    // case SET_EXPENSES_SUCCESS:
    //   return {
    //     ...state,
    //     isFetching: false,
    //   };
    default:
      return state;
  }
};
