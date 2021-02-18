import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/appRouter';
import configStore from './store/configStore';
import './styles/styles.scss'
import 'normalize.css/normalize.css'

import { addExpense } from './actions/expenses';


const store = configStore();

// store.dispatch(addExpense({ description: 'Water bill' , amount : 45}));
// store.dispatch(addExpense({ description: 'Gas bill', amount : 90, createdAt : 100 }));
// store.dispatch(addExpense({ description: 'rent', amount : 10 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));