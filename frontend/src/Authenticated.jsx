import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import history from './histore'

export default () => (
    <Router history={history}>
        <Switch>
            <Route path='/' component={HomePage} />
        </Switch>
    </Router>
)