import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItems = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}><h2>{description}</h2></Link>
            <h4>Amount : {amount}</h4>
            <h5>Date : {moment(createdAt).format("Do MM, YYYY")}</h5>
        </div>
    );
};

export default ExpenseListItems;