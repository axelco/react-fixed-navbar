import React from 'react';


class PageHeader extends React.Component {

    setCss(){
        let css
        css = "page-header"

        if(this.props.ySize){
            css += " page-header-padding_"+this.props.ySize+" "
        }

        css += "bg-"+this.props.bg+" "
        
        // Adding .is-dark css class in case we use the following bg classes
        let darkBgs = new Array('primary','primary-gradient', 'secondary', 'dark')  
        if(darkBgs.indexOf(this.props.bg) != -1){
            css += "is-dark "
        }    
        return css;

    }

    render() {

        const containerClasses = "container-"+this.props.containerSize+" text-"+this.props.containerAlign+" "   

      return  <div className={this.setCss()}>
      <div className={containerClasses}>
          {this.props.children}
      </div>        

  </div>  
    }
  }

export default PageHeader;