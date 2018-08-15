import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import ReactSVG from 'react-svg';

class Input extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isValid: true,
            rule: null
        };
    }
    
    onInputChange = event => {
        if (this.props.validation && this.props.validation.minLength) {
            const isValid = event.target.value.length >= this.props.validation.minLength.value;
            if (this.state.isValid !== isValid) {
                this.setState({ isValid, rule: 'minLength' });
                this.props.onChange(event, isValid);
                return;
            }
        }
        this.props.onChange(event);
    };
    
    render() {
        const { id, label, type, icon, value, validation } = this.props;
        
        let svg = null;
        if (icon) {
            switch (icon) {
                case 'user':
                    svg = <ReactSVG path="assets/svg/user.svg" className="icon"/>;
                    break;
                case 'lock':
                    svg = <ReactSVG path="assets/svg/lock.svg" className="icon"/>;
                    break;
                default:
                    svg = null;
            }
        }
        
        let errorTag = '';
        if (validation && this.state.rule) {
            const errorClasses = ['error', 'text-danger'];
            if (!this.state.isValid) {
                errorClasses.push('show');
            }
            errorTag = <span className={errorClasses.join(' ')}>{this.props.validation[this.state.rule].text}</span>;
        }
        
        const prepend = svg ? (
            <div className="input-group-prepend">
                <span className="input-group-text">{svg}</span>
            </div>
        ) : '';

        return (
            <div className="input-wrapper mb-4">
                <div className="input-group">
                    {prepend}
                    <input
                        id={id}
                        type={type ? type : 'text'}
                        className="form-control"
                        placeholder={label}
                        aria-label={label}
                        value={value ? value : ''}
                        autoComplete="false"
                        onChange={this.onInputChange}
                    />
                </div>
                {errorTag}
            </div>
        );
    }
}

Input.propTypes = {
    id: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    validation: PropTypes.shape({
        minLength: PropTypes.shape({
            text: PropTypes.string,
            value: PropTypes.number
        })
    })  
};

export default Input;