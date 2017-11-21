import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
  height: 54px;
  margin-bottom: 20px;
`;

const StyledAlert = (props) => {
  const { visible } = props;

  const bsProps = {
    onDismiss: props.onDismiss,
    bsClass: props.bsClass,
    bsStyle: props.bsStyle,
    closeLabel: props.closeLabel,
  };

  return (
    <Wrapper visible={visible}>
      <Alert {...bsProps}>{props.children}</Alert>
    </Wrapper>
  );
};

StyledAlert.propTypes = {
  visible: PropTypes.boolean,
  onDismiss: PropTypes.func,
  closeLabel: PropTypes.string,
  bsClass: PropTypes.string,
  bsStyle: PropTypes.string,
  children: PropTypes.node,
};

export default StyledAlert;
