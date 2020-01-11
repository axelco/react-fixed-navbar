import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faLongArrowAltUp} from '@fortawesome/free-solid-svg-icons'

class PageFooter extends React.Component{

    constructor(props){
        super(props)

        this.handleToTopClick = this.handleToTopClick.bind(this)
    }

    handleToTopClick(event){
        event.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    render(){
        return <footer className="main-footer bg-dark is-dark position-relative">
                <button 
                className="back-to-top"
                onClick={this.handleToTopClick}
                >
                    <FontAwesomeIcon icon={faLongArrowAltUp} />
                </button>
                <div className="container-sm text-center">
                    <p className="mb-0">
                        A React Component
                         made with <FontAwesomeIcon icon={faHeart} />
                        <span className="pl-2">by <a href="https://github.com/axelco">axelco</a></span>
                    </p>
                </div>
            </footer>
    }
}

export default PageFooter