import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './histore'
import LoginPage from './pages/LoginPage'
export default () => (
    <Router history={history}>
        <Switch>
            <Route path='/login' component={LoginPage} />
        </Switch>
    </Router>
)
