import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            text: ''
        };
        this.toggle = this.toggle.bind(this);
    }

    showModal(text) {
        this.setState({
            text: text
        });
        this.toggle();
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>INFO</ModalHeader>
                    <ModalBody>
                        {text}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;