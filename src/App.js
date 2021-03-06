/* jshint esversion: 6 */
import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import { Customer } from './pages/Customer'
import { SearchCustomer } from './pages/SearchCustomer'
import { CustomerBill } from './pages/CustomerBill'
import { Product } from './pages/Product'
import { Reports } from './pages/Reports'
import { Login } from './pages/Login'
import { ClientSideCustumerBill } from './pages/ClientSideCustumerBill'

class App extends Component {
    constructor (props) {
        super(props)
        this.addNavigation()
    }

    addNavigation () {
        document.addEventListener('keypress', (e) => {
            if (e.key === '\\') window.location = '#/'
        })
    }

    render () {
        return (
            <HashRouter>
                <div className="content">
                    <Route exact path="/" component={SearchCustomer} />
                    <Route path="/customer/new" component={Customer} />
                    <Route path="/products" component={Product} />
                    <Route path="/customer/details" component={CustomerBill} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/login" component={Login} />
                    <Route path="/bill" component={ClientSideCustumerBill} />
                </div>
            </HashRouter>
        )
    }
}

export default App
