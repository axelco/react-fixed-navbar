import React from 'react'
import { render} from 'react-dom'
import TopNav from './components/topNav'
import PageFooter from './components/pageFooter'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Demo from './demo'
import Doc from './doc'
import ScrollTop from './components/scrollTop'
import './scss/index.scss'

const routing = (
    <Router>
        <ScrollTop/>
        <TopNav />
        <Switch>
            <Route exact path="/" component={Demo} />
            <Route path="/doc" component={Doc} /> 
        </Switch>
        <PageFooter />
    </Router>

)

render(routing, document.getElementById("root"));