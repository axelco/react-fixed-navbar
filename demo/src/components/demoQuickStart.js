
import React from 'react'
import {Link} from 'react-router-dom'

import './../scss/code-blocs.scss'

class DemoQuickStart extends React.Component{
    render(){
        return <div id="quickStart" className="py-6">
        <div className="container-sm ">
        <h3 className=" display-4 text-center">Quick <strong className="text-primary" >start</strong></h3>
            <p>Run the following command inside your react project</p>
            <pre className="code-bloc lang-cli">
                <code >
                    <div><span className="cli-name">npm</span> install axl-react-fixed-nav</div>
                </code>
            </pre>
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
            <p>Finally, add the component in you render :</p>
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
            <hr className="my-5" />
            <div className="text-center">
                <p className="lead">Check the documentation to set up this component according to your needs</p>
                <Link to="/doc" className="btn btn-lg btn-primary mt-4">See the Doc</Link>                
            </div>                    

        </div>
    </div>
    }
}

export default DemoQuickStart