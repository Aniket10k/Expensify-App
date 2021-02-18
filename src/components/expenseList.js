import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './expenseListItem';
import getVisibleExpense from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {
            props.expenses.map((expense) => {
                return <ExpenseItem key={expense.id} {...expense} />
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpense(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);

