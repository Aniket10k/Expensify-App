import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilter from './expenseListFilter';
import ExpensesSummery from './expensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummery />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;