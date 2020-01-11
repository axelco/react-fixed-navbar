'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./effects.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FixedNavBar = function (_React$Component) {
    _inherits(FixedNavBar, _React$Component);

    function FixedNavBar(props) {
        _classCallCheck(this, FixedNavBar);

        var _this = _possibleConstructorReturn(this, (FixedNavBar.__proto__ || Object.getPrototypeOf(FixedNavBar)).call(this, props));

        _this.state = {
            isActive: false, // true if nav fixed, false otherwise     
            originalScrollPos: document.documentElement.scrollTop // Get original scroll position
        };

        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.getNavSrollBegin = _this.getNavSrollBegin.bind(_this);
        return _this;
    }

    /*
        getNavSrollBegin
          Retrieve the offset top of the component to know when to fix the nav
        If added component offset top + component height + triggerHeight (props)
    */


    _createClass(FixedNavBar, [{
        key: 'getNavSrollBegin',
        value: function getNavSrollBegin() {
            var compElt = _reactDom2.default.findDOMNode(this);
            var viewportOffset = compElt.getBoundingClientRect();
            var offsetTop = viewportOffset.top || compElt.offsetTop;
            var scrTop = document.documentElement.scrollTop || document.body.scrollTop;
            var begin = offsetTop + scrTop + compElt.offsetHeight + this.props.triggerHeight;
            this.setState({
                stickyBegins: begin
            });
        }

        /* 
          setStyles  
            given the state "isActive", this method handle the style attribute of the component
            if "isActive" true, we set everything needed to fix the component
        */

    }, {
        key: 'setStyles',
        value: function setStyles() {
            var style = void 0;
            var fxDur = this.props.fxDuration + "s";

            if (this.state.isActive) {
                style = {
                    position: 'fixed',
                    width: '100%',
                    zIndex: '9999',
                    animationDuration: fxDur,
                    animationFillMode: 'both',
                    left: '0'
                    // According to props "position", we add style.top or style.bottom
                };this.props.position === 'top' ? style.top = '0' : style.bottom = '0';
            }
            return style;
        }

        /*
            setBodyPaddings
                Handle paddings of the body node in the DOM
                The aim is to add a padding equals to the nav height on top or bottom,
                to improve user scrolls while nav is fixing
        */

    }, {
        key: 'setBodyPaddings',
        value: function setBodyPaddings() {
            var body = document.body;
            var navbar = _reactDom2.default.findDOMNode(this);
            var navHeight = navbar.offsetHeight + 'px';
            if (this.props.position === 'top') {
                body.style.paddingTop = navHeight;
                body.style.paddingBottom = 0;
            } else {
                body.style.paddingBottom = navHeight;
                body.style.paddingTop = 0;
            }
        }

        /*
            setBodyPaddings
                reset paddings on body node to 0 when nav is unfixed
        */

    }, {
        key: 'resetBodyPaddings',
        value: function resetBodyPaddings() {
            var body = document.body;
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

    }, {
        key: 'setCssClasses',
        value: function setCssClasses() {
            var cssClasses = '';
            if (this.props.className != null) {
                cssClasses += this.props.className + ' ';
            }
            if (this.state.isActive) {
                if (this.props.activateFx) {
                    // Given the props "fxName" and "position" we switch css fx classNames
                    var fxClass = void 0;
                    switch (this.props.fxName) {
                        case 'fade':
                            fxClass = 'fadeIn';
                            break;
                        case 'fadeIn':
                            fxClass = this.props.position === 'top' ? 'fadeInDown' : 'fadeInUp';
                            break;
                        case 'slideIn':
                            fxClass = this.props.position === 'top' ? 'slideInDown' : 'slideInUp';
                            break;
                        case 'bounceIn':
                            fxClass = this.props.position === 'top' ? 'bounceInDown' : 'bounceInUp';
                            break;
                        case 'zoomIn':
                            fxClass = this.props.position === 'top' ? 'zoomInDown' : 'zoomInUp';
                            break;
                        default:
                            fxClass = this.props.position === 'top' ? 'slideInDown' : 'slideInUp';
                    }

                    cssClasses += fxClass;
                }
                cssClasses += ' ' + this.props.activeClassName;
            }

            return cssClasses;
        }

        /*
            setScrollState
              Handle the state "isActive" in handleScroll method
            @param status : "on" or "off"
        */

    }, {
        key: 'setScrollState',
        value: function setScrollState(status) {

            if (status === 'on') {
                this.setState({ isActive: true });
                this.setBodyPaddings();
            } else {
                this.setState({ isActive: false });
                this.resetBodyPaddings();
            }
        }

        /*
            handleScroll
                Used in the scroll event that will be add in componentDidMount()
                According to the scroll position, we will activate or not the fixed nav
            */

    }, {
        key: 'handleScroll',
        value: function handleScroll() {

            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            // If scroll top reaches the state "stickyBegins"
            if (currentScroll > this.state.stickyBegins) {

                // if props "onScrollUpOnly" is true, 
                //it means we have to activate setScrollState only when scrollin up
                if (this.props.onScrollUpOnly) {

                    if (currentScroll <= this.state.originalScrollPos) {
                        if (!this.state.isActive && currentScroll) {

                            this.setScrollState('on');
                        }
                    } else {
                        this.setScrollState('off');
                    }
                }
                // if props "onScrollUpOnly" is FALSE, 
                // we activate setScrollState on scrolling down as well as on scrolling up           
                else {
                        this.setScrollState('on');
                    }
            } else {
                this.setScrollState('off');
            }

            // We set a new scrollTop for the state "originalScrollPos" at the end of the handler
            // This line allows us to see if user scrolls up or down 
            this.setState({ originalScrollPos: document.documentElement.scrollTop || document.body.scrollTop });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.getNavSrollBegin();
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.getNavSrollBegin);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.onScrollUpOnly !== prevProps.onScrollUpOnly || this.props.position !== prevProps.position) {

                this.handleScroll();
            }

            if (this.props.fxName !== prevProps.fxName || this.props.activateFx !== prevProps.activateFx) {

                this.setCssClasses();
            }
        }

        // We remove events before unmounting

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.resetBodyPaddings();
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.getNavSrollBegin);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                {
                    style: this.setStyles(),
                    className: this.setCssClasses()
                },
                this.props.children
            );
        }
    }]);

    return FixedNavBar;
}(_react2.default.Component);

exports.default = FixedNavBar;

//Define props types allowed

FixedNavBar.propTypes = {
    children: _propTypes2.default.element.isRequired,
    triggerHeight: _propTypes2.default.number,
    position: _propTypes2.default.oneOf(['top', 'bottom']),
    onScrollUpOnly: _propTypes2.default.bool,
    activateFx: _propTypes2.default.bool,
    fxName: _propTypes2.default.oneOf(['fade', 'fadeIn', 'slideIn', 'bounceIn', 'zoomIn']),
    fxDuration: _propTypes2.default.number,
    activeClassName: _propTypes2.default.string
};

// Default props
FixedNavBar.defaultProps = {
    triggerHeight: 0,
    position: 'top',
    onScrollUpOnly: false,
    activateFx: true,
    fxName: 'slideIn',
    fxDuration: 0.3,
    activeClassName: 'is-fixed'
};