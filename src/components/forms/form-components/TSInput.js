import React from 'react';
import PropTypes from 'prop-types';
import { Input, Col } from 'reactstrap';

class TSInput extends React.Component {

    render() {
        const {
            inputImgStyle,
            inputInvalid,
            inputType,
            inputPlaceholder,
            inputValue,
            inputChange,

        } = this.props;
        return (
            <div className="d-flex tes-input mb-2">
                <Col sm={1} style={inputImgStyle}>
                </Col>
                <Col sm={11} className="pl-0">
                    <Input
                        invalid={inputInvalid}
                        type={inputType}
                        id={inputType}
                        name={inputType}
                        placeholder={inputPlaceholder}
                        value={inputValue}
                        onChange={inputChange}
                    />
                </Col>
            </div>
        );
    }
}

TSInput.propTypes = {
    inputImgStyle: PropTypes.object.isRequired,
    inputInvalid: PropTypes.bool.isRequired,
    inputType: PropTypes.string.isRequired,
    inputPlaceholder: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
}

export default TSInput;