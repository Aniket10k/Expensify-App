import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify!!</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to='/add' activeClassName="is-active" exact={true}>Add</NavLink>
        <NavLink to='/help' activeClassName="is-active" exact={true}>help</NavLink>
    </header>
)

export default Header;