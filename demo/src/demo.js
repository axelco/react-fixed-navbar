import React from 'react'
import FixedNavBar from '../../src';
import PageHeader from './components/pageHeader'
import DemoQuickStart from './components/demoQuickStart'
import DemoFeatures from './components/demoFeatures'
import DemoNav from './components/demoNav'

import './scss/demo.scss'


class Demo extends React.Component {

    constructor(props){

        super(props)
    
        this.state = {
            position: 'top',
            onScrollUpOnly : false,
            activateFx : true,
            fxName : "fadeIn",
            fxDuration: 0.4,
            
        }

        this.fxList = [
            {
                value: "fade",
                text : "Fade"
            },
            {
                value: "fadeIn",
                text : "Fade in"
            },            
            {
                value: "slideIn",
                text : "Slide in"
            },   
            {
                value: "bounceIn",
                text : "Bounce In"
            },             
            {
                value: "zoomIn",
                text : "Zoom In"
            },                                       
        ]

        this.navPosList = [
            {
                value : 'top',
                label : 'on top'
            },
            {
                value : 'bottom',
                label : 'on bottom'
            },
        ]
    
        this.handleSwitchScrollUp = this.handleSwitchScrollUp.bind(this)
        this.handleFxNameChange = this.handleFxNameChange.bind(this)
        this.handleFxOnChange = this.handleFxOnChange.bind(this)
        this.handleNavPosChange = this.handleNavPosChange.bind(this)
        this.handleDurationChange = this.handleDurationChange.bind(this)
    }

    handleFxNameChange(e){
        e.preventDefault()
        this.setState({
            fxName : e.target.value
        });    
    }

    handleDurationChange(e){
        e.preventDefault()
        this.setState({
            fxDuration : e.target.value
        });            
    }

    handleSwitchScrollUp(e){
        console.log(e.target.checked)
        this.setState({
            onScrollUpOnly : e.target.checked
        }); 
        console.log("changing handleSwitchScrollUp : "+this.state.onScrollUpOnly)   
    }       
    
    handleFxOnChange(e){
        this.setState({
            activateFx : e.target.checked
        });           
    }

    handleNavPosChange(e){
        this.setState({
            position : e.target.id
        });       
    }

    getExtraFxOpts(){


        const fxOptions = this.fxList.map((item) => 
            <option 
                key={item.value}
                value = {item.value}                
            >
                {item.text}
            </option>
        );

        let content;

        if(this.state.activateFx){
            content =  <div className="col-lg-12 row"><div className="mb-5 col-lg-6">
            <label>Choose the effect when nav appears :</label>
            <select 
                className="form-control form-control-lg" 
                onChange={this.handleFxNameChange}
                value={this.state.fxName}
            >
                {fxOptions}
            </select>

        </div>

        <div className="mb-5 col-lg-6">
            <label>Choose the effect's duration (in secs)</label>
            <input 
                type="number" 
                className="form-control form-control-lg "
                placeholder="type a number in seconds. ex : 1"
                onChange={this.handleDurationChange}
                value = {this.state.fxDuration}
                />

        </div>
        </div>; 
        }

        return content;
    }

    render(){

        const posOptions = this.navPosList.map((item)=> 
            <div key={item.value} className="custom-control custom-radio custom-control-inline">
                <input 
                    type="radio" 
                    id={item.value} 
                    name="position-radio"
                    onChange={this.handleNavPosChange}
                    className="custom-control-input" 
                    checked={item.value === this.state.position ? true : false}
                    />
                <label 
                    className="custom-control-label" 
                    htmlFor={item.value}
                >
                    {item.label}
                </label>
            </div>       
        );        

        return  <div >
            <PageHeader 
                className="is-dark"
                bg="primary"
                ySize="l"
                containerSize="sm"
                containerAlign="center"
                 >
                <h1 className="display-3">React fixed Navbar Component</h1>
                <p className="lead-1">A component that fix a navbar on scroll of the page.</p>


            </PageHeader>
            <FixedNavBar

                position = {this.state.position}
                onScrollUpOnly = {this.state.onScrollUpOnly}
                fxName={this.state.fxName}
                fxDuration={this.state.fxDuration}
                activateFx = {this.state.activateFx}
            >
                <DemoNav />
            </FixedNavBar>
            <DemoFeatures /> 
            <div id="config" className=" py-8 " >
                <div className="container-sm">
                    <div className=" shadow-sm rounded bg-white" >
                        <header className="border-bottom">
                            <div className="px-4 py-4" >
                                <h2 
                                    className="text-center display-4 mb-0"
                                ><strong className="text-primary">Change set up</strong> in live</h2>
                            </div>
                        </header>
                        <div className="px-4 py-5">
                            
                            <form className="form-row">
                                <div className="mb-5 col-lg-12">
                                    <p>Fix you nav on top or bottom of the page :</p>
                                    {posOptions}

                                </div>                                
                                <div className="mb-5 col-lg-6">
                                    <p>Choose whether to trigger fixed navbar on scroll up only, or not</p>
                                    <div className="switch-container">
                                        
                                        <label className="switch">
                                            <input 
                                            id="checkIfSCrollUp"
                                            type="checkbox"                    
                                            onChange={this.handleSwitchScrollUp}
                                            checked={this.state.onScrollUpOnly}

                                            />
                                            <span className="slider round"></span>
                                        </label>
                                        <div className="switch-label">
                                            {this.state.onScrollUpOnly ? 'Active only on scroll up' : 'Active on scroll up and down'}
                                        </div>                
                                    </div>
                                </div>
                                <div className="mb-5 col-lg-6">
                                    <p>Choose whether to trigger fixed navbar on scroll up only, or not</p>
                                    <div className="switch-container">
                                        
                                        <label className="switch">
                                            <input 
                                            id="checkIfFx"
                                            type="checkbox"                    
                                            onChange={this.handleFxOnChange}
                                            checked={this.state.activateFx}

                                            />
                                            <span className="slider round"></span>
                                        </label>
                                        <div className="switch-label">
                                            {this.state.activateFx ? 'Effects activated' : 'Effects deactivated'}
                                        </div>                
                                    </div>
                                </div>
                                {this.getExtraFxOpts()}
                            </form>

                        </div>

                    </div>
                                
                </div>        

                </div>             
            
            <DemoQuickStart />
        </div>
    }
}

export default Demo;