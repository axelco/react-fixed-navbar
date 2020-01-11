import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'


class DemoFeatures extends React.Component {
    constructor(props){
        super(props)

        this.features = [
            {
                value : "top-or-bottom",
                title : "Fix the nav on top or bottom of the page",
            },            
            {
                value : "only-scroll-up",
                title : "Fix the nav only when scrolling up",
            },
            {
                value : "activate-fx",
                title : "5 different effects available",
            },          
            {
                value : "chose-height",
                title : "set the height when to trigger the fixed nav",
            },   
            {
                value : "active-class",
                title : "Style your nav when fixed thanks to a specific css class",
            },                                                             
        ]
    }
    render (){
        const featuresList = this.features.map((feature) =>
            <li 
                key={feature.value}
                className="nav-item lead-1 p-3"

            ><FontAwesomeIcon icon={faCubes} className="mr-3 text-black-50" />
            {feature.title}</li>  
        );


        return <div id="features" className="py-8 bg-white">
                <div className="container text-center">
                <h3 className=" display-4 ">Component <strong className="text-primary" >features</strong></h3>
                    <ul className="nav justify-content-center ">
                        {featuresList}
                    </ul>
                </div>
            </div>           
        
    }

}
export default DemoFeatures;