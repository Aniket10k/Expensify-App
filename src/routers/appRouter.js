import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/header';
import ExpenseDashboard from '../components/expenseDashboard';
import AddExpense from '../components/addExpense';
import EditExpense from '../components/editExpense';
import HelpExpense from '../components/helpExpense';
import NotFoundPage from '../components/notFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/add" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={HelpExpense} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;