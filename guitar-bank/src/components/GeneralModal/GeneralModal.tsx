import React from "react";
import Modal from "react-bootstrap/Modal";

export default class GeneralModal extends React.Component<any, any> {    
    constructor(props: any) {
        super(props);

        this.state = {
            hidden: false,
            password: "",
            showMessageModal: false,
            isUserValid: false,
            show: true,
            messageBody: "",
            messageTitle: ""
        };
    }

    private onHideHandler() {
        this.props.onCloseModal();
    }

    render() {

        console.log(this.props.show);
        if (this.props.show) {
            return (
                <div>
                    <div className="general-modal-container">
                        <Modal.Dialog
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            hidden={false}
                            >
                            <Modal.Header closeButton onHide={() => this.onHideHandler()}>
                                <Modal.Title>{this.props.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    {this.props.body}
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className="btn btn-danger" onClick={this.props.onCloseModal}>Close</button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                    {/* {this.state.showMessageModal ? <CustomModal {...this.props} useListOption={false} listMessages={[]} showLoginButton={false} title={this.state.messageTitle} body={this.state.messageBody} buttontitle={"Close"} show={this.state.showMessageModal} onCloseModal={this.closeWarningModal} /> : <div></div>} */}
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    private enterPress(event: any): void {
        if (event.key === 'Enter'){

        }
    }

    private passwordOnChange(event: any): void {
        this.setState({
            password: event.target.value
        });
    }

    private differentUserClick(): void {
        localStorage.clear();
    }

    private closeWarningModal = (): void => {
        this.setState({
            showMessageModal: false
        });
    }
}