import React from 'react'
import LeftAffix from './leftAffix'
import DocSectionInstall from './docSectionInstall'

import './../scss/code-blocs.scss'
import './../scss/doc.scss'


class Doc extends React.Component {
    render(){
        return <div id="doc" className="py-6 bg-white">
            <div className="container">
                <h2 className="text-center display-4 mb-5">Component <strong className="text-primary">Documentation</strong></h2>
                <div className="row">
                    <nav className="col-12 col-lg-3 col-xl-2 pr-lg-5">

                        <LeftAffix 
                            topHeight={100}
                        >
                            <ul className="doc-left-nav">
                                    <li className="nav-item">
                                        <a href="#install" className="nav-link">Install</a>
                                    </li>
                                    <li className="nav-item"><a href="#use" className="nav-link">Use</a></li>
                                    <li className="nav-item"><a href="#props" className="nav-link">Props</a></li>
                            </ul>
                        </LeftAffix>

                    </nav>
                    <div className="col-12 col-lg-9 col-xl-10 doc-sections">

                        <DocSectionInstall />
                        <section id="use">
                            <h3>Use the component</h3>
                            <p>import the component wherever you need it :</p>
                            <pre className="code-bloc lang-jsx">
                                <code >
                                    <div>
                                        <span className="statement">import </span>
                                        <span className="func">FixedNavBar </span>
                                        <span className="statement">from </span>
                                        <span className="string">'axl-react-fixed-nav'</span>
                                    </div>
                                </code>
                            </pre>            
                            <p>Then, just call the component :</p>
                            <pre className="code-bloc lang-jsx">
                                <code >
                                    <div className="comp">{"<FixedNavBar >"}</div>
                                        <div className="l-1">
                                            <span className="comm">// Here you can place whatever you want </span>    
                                        </div>                    
                                        <div className="l-1">
                                            <span className="node">{"<header>"}</span>             
                                        </div>
                                        <div className="l-2">
                                            <span className="node">{"<h2>"}</span>
                                            <span>This is my header</span>
                                            <span className="node">{"</h2>"}</span>    
                                                    
                                        </div>  
                                        <div className="l-1">
                                            <span className="node">{"</header>"}</span>             
                                        </div>                                     
                                    <div>
                                        <span className="comp">{"</FixedNavBar >"}</span>
                                    </div>
                                </code>
                            </pre>                            
                        </section>                           
                        <section id="props">
                            <h3>Props</h3>
                            <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Default</th>
                                        <th scope="col">Description</th>                                        
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">triggerHeight</th>
                                        <td >number</td>
                                        <td>0</td>
                                        <td>
                                            <p>Nav fixed when scrolls is over the nav offset top + the nav height.
                                                <br/>
                                                But let's say you add 200 on this props, the nav will fix when scrolls is over : nav offsetTop + nav offsetHeight + 200

                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">onScrollUpOnly</th>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>
                                            <p>If true, the navbar will fix only when user scrolls up the page.</p>
                                        </td>
                                    </tr>      
                                    <tr>
                                        <th scope="row">position</th>
                                        <td>string</td>
                                        <td>top</td>
                                        <td>
                                            <p>Set "top" or "bottom".<br/> Nav will fix given the value you sent to component.</p>
                                        </td>
                                    </tr>       
                                    <tr>
                                        <th scope="row">activateFx</th>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>
                                            <p>Activate the effects when nav appears on scroll up.</p>
                                        </td>
                                    </tr>          
                                    <tr>
                                        <th scope="row">fxName</th>
                                        <td>string</td>
                                        <td>slideIn</td>
                                        <td>
                                            <p>Choose the type of effect you wnat when nav is fixing.<br/>
                                            Accepted values : 'fade', 'fadeIn', 'slideIn', 'bounceIn', 'zoomIn'
                                            </p>
                                        </td>
                                    </tr>                                                                                                                                 
                                </tbody>
                            </table>
                        
                            </div>

                        </section>                       
                    </div>                                
                </div>
            </div>

        </div>
    }
}

export default Doc;