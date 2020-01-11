import React from 'react'
import { render} from 'react-dom'
import TopNav from './components/topNav'
import PageFooter from './components/pageFooter'

import Demo from './demo'
import './scss/index.scss'

const routing = (
    <div>
        <TopNav />
        <Demo />
        <PageFooter />
    </div>

)

function App(){
    return  <div><TopNav />
    <Demo />
    <PageFooter /></div>
}

render(routing, document.getElementById("root"));