import React from "react";
import Modal from "react-bootstrap/Modal";
import GeneralModal from "../GeneralModal/GeneralModal";

export default class UploadModal extends React.Component<any, any> {    
    constructor(props: any) {
        super(props);

        this.state = {
            hidden: false,
            password: "",
            showMessageModal: false,
            isUserValid: false,
            show: true,
            messageBody: "",
            messageTitle: "",
            selectedFile: null,
            showGeneralModal: false
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
                    <div className="modal-container">
                        <Modal.Dialog
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            hidden={false}
                            >
                            <Modal.Header closeButton onHide={() => this.onHideHandler()}>
                                <Modal.Title>Upload</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div style={{minHeight: 250}}>
                                    <div> 
                                        <div> 
                                            <input type="file" id={"file"} onChange={this.onFileChange} className={"inputFile"} /> 
                                            <label htmlFor={"file"} className={"btn btn-outline-dark"}>Browse Files</label> 
                                            <br />
                                            
                                        </div> 
                                        {this.fileData()} 
                                    </div> 
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className={"btn btn-dark"} onClick={this.onFileUpload}> 
                                    Upload 
                                </button>
                                <button className="btn btn-danger" onClick={this.props.onCloseModal}>Close</button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                    {this.state.showGeneralModal ? <GeneralModal title={"Upload Warning"} body={"Please select a file!"} buttontitle={"Close"} show={this.state.showGeneralModal} onCloseModal={this.closeGeneralModal} /> : <div></div>}
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    private closeGeneralModal = () => {
        this.setState({
            showGeneralModal: false
        });
    }

    private openGeneralModal = () => {
        this.setState({
            showGeneralModal: true
        })
    }

    // On file upload (click the upload button) 
    private onFileUpload = () => { 
     
        // Create an object of formData 
        const formData = new FormData(); 

        if (this.state.selectedFile === null || this.state.selectedFile === undefined) {
            this.openGeneralModal();
        }
        else {
            // Update the formData object 
            formData.append( 
            "myFile", 
            this.state.selectedFile, 
            this.state.selectedFile.name 
            ); 
        
            // Details of the uploaded file 
            console.log(this.state.selectedFile); 
            console.log(formData);
        
            // Request made to the backend api 
            // Send formData object 
            //axios.post("api/uploadfile", formData); 
        }
      }; 

    // On file select (from the pop up) 
    private onFileChange = (event: any) => { 
        
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }, () => {
            console.log("onFileChange");
            console.log(this.state);
        }); 
    }; 

    // File content to be displayed after 
    // file upload is complete 
    private fileData = () => { 
        if (this.state.selectedFile) { 
            return ( 
                <div> 
                    <h2>File Details:</h2> 
                    <p>File Name: {this.state.selectedFile.name}</p> 
                    <p>File Type: {this.state.selectedFile.type}</p> 
                    <p> 
                        Last Modified:{" "} 
                        {this.state.selectedFile.lastModifiedDate ? this.state.selectedFile.lastModifiedDate.toDateString() : ""} 
                    </p> 
                </div> 
          ); 
        } 
        else { 
            return ( 
                <div> 
                    <br /> 
                    <h4>Choose before Pressing the Upload button</h4> 
                </div> 
            ); 
        } 
    }; 

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