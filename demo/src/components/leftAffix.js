
import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class LeftAffix extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isActive : false

        }

        this.handleScroll = this.handleScroll.bind(this)
        this.handleResize = this.handleResize.bind(this);
    }

    /*
        setAffixBegin

        Get the offset height of the component 
        accorindg to the viewport Offset 
        And we also take the scrollTop position into account in our calculations

    */
    setAffixBegin(){
        let compElt = ReactDOM.findDOMNode(this);
        let viewportOffset = compElt.getBoundingClientRect();
        let scrTop = document.documentElement.scrollTop || document.body.scrollTop;
        let wiewportTop = viewportOffset.top + scrTop

        this.setState({
            affixBeginsAt : wiewportTop
        });      

    }    

    handleResize(){
        let compElt = ReactDOM.findDOMNode(this);
        let windowWidth = window.innerWidth;
        this.setState({
            compWidth: compElt.clientWidth,
            windowWidth: windowWidth
        });

    }


    /*
        handleScroll

        activated on scroll event to change the isActive state
        Thanks to this state, the component is fixed on the page
        according to styles in setStyle method

    */
    handleScroll() {
        
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Récupération du scrollTop du doc à scroll    
        // If current Scroll pos hits component offset 
        // && window Width is under breackpoint limit 
        if(this.state.windowWidth > this.props.breakpointLimit){

            if( currentScroll > this.state.affixBeginsAt){
                this.setState({isActive : true});      
                
            }
            // Si la hauteur limite est atteinte, on désactive le plugin
            else{
                this.setState({isActive : false});
            }     
        }
       

    }    


    /*
        When component did mount, we search for the offset height of the component
        Then, we active the handleScroll method on scroll event
    */
    componentDidMount(){

        this.setAffixBegin() // On setState stickyBegins via la méthode getNavScrollBegin
        this.handleResize();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);

        
    }  

    /*
        We component will unmount,
        we remove the event listener on the scroll 
    */

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }    


    /*  
        setStyle
        According to the isActive state,
        we set the style neeeded to fix or unfix the component
    */
    
    setStyle(){
        let style ;
        if(this.state.isActive){
            style={
                position: 'fixed',
                top: this.props.topHeight+'px',
                width: this.state.compWidth+'px',                

            }
        }else{
            style={
                position: 'inherit',
                width: 'inherit'
            }
        }

        return style
    }

    render(){

        return <div style={this.setStyle()}>
            {this.props.children}
        </div>
    }

}

export default LeftAffix

LeftAffix.defaultProps = {
    breakpointLimit : 1000,
    topHeight: 0
  };