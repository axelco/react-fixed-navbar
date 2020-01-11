import React from 'react'

class DemoNav extends React.Component {
    constructor(props){
        super(props)

        this.navLinks = [
            {
                id : "features",
                title : "Features",
            },            
            {
                id : "config",
                title : "live set up",
            },            
            {
                id : "quickStart",
                title : "Quick start",
            },                                                                     
        ]
    }
    render (){
        const navLinks = this.navLinks.map((link) =>
            <li 
                key={link.id}
                className="nav-item "
            >
                <a 
                    href={'#'+link.id}
                    className="nav-link"
                    >{link.title}</a>
            </li>  
        );


        return <nav className="demo-navbar navbar navbar-expand-lg ">
        <p className="mb-0 lead">This is demo Navbar</p>
        <div className="demo-navbar-right ml-auto d-flex align-items-center" >
            <ul className="navbar-nav mr-3">                   
                {navLinks}

            </ul>     
            <div className="demo-navbar-btn">
                <a href="#" className="btn btn-lg btn-secondary">Github</a>   
            </div>           
                                
        </div>
    </nav>          
        
    }

}
export default DemoNav;