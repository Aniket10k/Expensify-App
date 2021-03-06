import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpense from '../selectors/expenses';
import totalExpense from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 0 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <h2>Viewing {expensesCount} {expenseWord} totalling to {formattedExpensesTotal}</h2>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpense(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: totalExpense(visibleExpenses)
    }

}

export default connect(mapStateToProps)(ExpensesSummary);