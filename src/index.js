import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './effects.css'

class FixedNavBar extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
            isActive : false,  // true if nav fixed, false otherwise     
            originalScrollPos : document.documentElement.scrollTop // Get original scroll position
        }

        this.handleScroll = this.handleScroll.bind(this)
        this.getNavSrollBegin = this.getNavSrollBegin.bind(this)
    }


    /*
        getNavSrollBegin

        Retrieve the offset top of the component to know when to fix the nav
        If added component offset top + component height + triggerHeight (props)
    */
    getNavSrollBegin(){
        let compElt = ReactDOM.findDOMNode(this);
        let viewportOffset = compElt.getBoundingClientRect()
        let offsetTop = viewportOffset.top || compElt.offsetTop
        let scrTop = document.documentElement.scrollTop || document.body.scrollTop;
        let begin = offsetTop + scrTop + compElt.offsetHeight + this.props.triggerHeight
        this.setState({
            stickyBegins : begin
        });      

    }

    /* 
      setStyles  
        given the state "isActive", this method handle the style attribute of the component
        if "isActive" true, we set everything needed to fix the component
    */
    setStyles(){
        let style ; 
        let fxDur = this.props.fxDuration+"s"

        if(this.state.isActive){
            style = {
                position: 'fixed',
                width: '100%',
                zIndex: '9999',
                animationDuration: fxDur,
                animationFillMode: 'both',
                left: '0'
            }
            // According to props "position", we add style.top or style.bottom
            this.props.position === 'top' ? style.top = '0' :   style.bottom = '0'


        }
        return style;
    }

    /*
        setBodyPaddings
            Handle paddings of the body node in the DOM
            The aim is to add a padding equals to the nav height on top or bottom,
            to improve user scrolls while nav is fixing
    */
    setBodyPaddings(){
        let body = document.body;
        let navbar = ReactDOM.findDOMNode(this);
        let navHeight = navbar.offsetHeight+'px';
        if(this.props.position === 'top'){
            body.style.paddingTop = navHeight
            body.style.paddingBottom = 0
        }else{
            body.style.paddingBottom = navHeight
            body.style.paddingTop = 0
        }

    }

    /*
        setBodyPaddings
            reset paddings on body node to 0 when nav is unfixed
    */
    resetBodyPaddings(){
        let body = document.body;
        body.style.paddingTop = 0;
        body.style.paddingBottom = 0;
    }

    /*
        setCssClasses

        Handle the css classes of the component given state "isActive"
        It adds : 
            the classes sent by component prop,
            the effects classes name 
            the props "activeClassName"
    */
    setCssClasses(){
        let cssClasses = ''
        if(this.props.className != null){
            cssClasses += this.props.className+' '
        }
        if(this.state.isActive){
            if(this.props.activateFx){
                // Given the props "fxName" and "position" we switch css fx classNames
                let fxClass ;
                switch(this.props.fxName ){
                    case 'fade' :
                        fxClass = 'fadeIn'
                        break;
                    case 'fadeIn' :
                        fxClass = this.props.position === 'top' ? 'fadeInDown' : 'fadeInUp'
                        break ;
                    case 'slideIn' :
                        fxClass = this.props.position === 'top' ? 'slideInDown' : 'slideInUp'
                        break ;    
                    case 'bounceIn' :
                        fxClass = this.props.position === 'top' ? 'bounceInDown' : 'bounceInUp'
                        break ; 
                    case 'zoomIn' : 
                    fxClass = this.props.position === 'top' ? 'zoomInDown' : 'zoomInUp'
                        break;                               
                    default : 
                        fxClass = this.props.position === 'top' ? 'slideInDown' : 'slideInUp'            
                }

                cssClasses += fxClass
            }            
            cssClasses += ' '+ this.props.activeClassName
        }
        
        return cssClasses
    }

    /*
        setScrollState

        Handle the state "isActive" in handleScroll method
        @param status : "on" or "off"
    */
    setScrollState(status){

        if(status === 'on'){
            this.setState({isActive : true});
            this.setBodyPaddings() 
        }else{
            this.setState({isActive : false});   
            this.resetBodyPaddings()  
        }

    }

    
    /*
        handleScroll
            Used in the scroll event that will be add in componentDidMount()
            According to the scroll position, we will activate or not the fixed nav


    */

    handleScroll() {
        
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 

        // If scroll top reaches the state "stickyBegins"
        if( currentScroll > this.state.stickyBegins){

            // if props "onScrollUpOnly" is true, 
            //it means we have to activate setScrollState only when scrollin up
            if(this.props.onScrollUpOnly) {

                if(currentScroll <= this.state.originalScrollPos){
                    if(!this.state.isActive && currentScroll){
                        
                        this.setScrollState('on');
                    }        
                }else{
                    this.setScrollState('off');                          
                }   

            }
            // if props "onScrollUpOnly" is FALSE, 
            // we activate setScrollState on scrolling down as well as on scrolling up           
            else{
                this.setScrollState('on');
            }
            
        }
        else{
            this.setScrollState('off');   
        }            

        // We set a new scrollTop for the state "originalScrollPos" at the end of the handler
        // This line allows us to see if user scrolls up or down 
        this.setState({ originalScrollPos : document.documentElement.scrollTop || document.body.scrollTop});   

    }



    componentDidMount(){

        this.getNavSrollBegin()
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.getNavSrollBegin);
    }

    componentDidUpdate(prevProps){
        if(
            this.props.onScrollUpOnly !== prevProps.onScrollUpOnly
            || this.props.position !== prevProps.position
        ){
            
            this.handleScroll()
        }

        if(this.props.fxName !== prevProps.fxName
            || this.props.activateFx !== prevProps.activateFx
            ){

            this.setCssClasses()
        }
    }    

    // We remove events before unmounting
    componentWillUnmount(){        
        this.resetBodyPaddings()  
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.getNavSrollBegin);
    }

    render(){

      return <div 
            style={this.setStyles()}
            className={this.setCssClasses()}
        >
            {this.props.children}
        </div>

      
    }
  


}

export default FixedNavBar

  //Define props types allowed
  FixedNavBar.propTypes = {
    children: PropTypes.element.isRequired,
    triggerHeight : PropTypes.number,
    position: PropTypes.oneOf(['top', 'bottom']),
    onScrollUpOnly : PropTypes.bool,
    activateFx : PropTypes.bool,
    fxName: PropTypes.oneOf(['fade', 'fadeIn', 'slideIn', 'bounceIn', 'zoomIn']),
    fxDuration : PropTypes.number,
    activeClassName : PropTypes.string
  };

  // Default props
  FixedNavBar.defaultProps = {
    triggerHeight : 0,
    position: 'top',
    onScrollUpOnly : false,
    activateFx : true,
    fxName : 'slideIn',
    fxDuration : 0.3,
    activeClassName : 'is-fixed'
  };
