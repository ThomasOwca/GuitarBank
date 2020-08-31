import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import  './App.scss';
import 'font-awesome/css/font-awesome.min.css';
import SettingsModal from './components/SettingsModal/SettingsModal';
import UploadModal from './components/UploadModal/UploadModal';
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            showSettingsModal: false,
            showUploadModal: false,
            showGeneralModal: false
        };
    }

    componentDidMount() {

    }
    
    render() {
        /* HighchartsConfig */
        const config = {
        title: {
            text: "By Genre",
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -30,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                center: ['50%', '45%'],
                size: '105%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Genre',
            innerSize: '50%',
            data: [
                ['Rock', 15],
                ['Pop', 13],
                ['Reggae', 5],
                ['Metal', 2]
            ]
        }],
        colors: ["#DC3545", "#E35D6A", "#EA868F", "#F1AEB5", "#F8D7DA"]
        };

        return (
            <div>
                <div>
                    <div id={"header"}>
                        <div className={"row padding-bottom"}>
                            <div className={"col-10"}>
                                <br />
                                <span className="logo">
                                    <img src={"./images/icons/guitar.png"} alt="logo" style={{color: "white"}} height={40}/>
                                    &nbsp;
                                    <span className="logo-text">GuitarBank</span>
                                </span>
                            </div>
                            <div className={"col-2"}>
                            <div id={"settings"}>
                                <i className="fa fa-cog" onClick={() => this.openSettingsModal()}></i>
                            </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <span>  
                            </span>
                            <ReactHighcharts config={config} /*ref="chart"*/></ReactHighcharts>
                        </div>  
                    </div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <hr />
                            <h3>Sound Library</h3>
                            <button className={"btn btn-outline-danger"} onClick={() => this.openUploadModal()}>Upload</button>
                            <div className={"card padding-margin"}>
                            <div className={"col-12"}>
                                <h5><strong>Track 1</strong></h5>
                                <label>Genre: Rock</label>
                                <ReactAudioPlayer
                                src={require("./audio/sample/track1.mp3")}
                                controls
                                style={{width: "100%"}}
                                />
                                <button className={"btn btn-danger"}>View Details</button>
                            </div>
                            </div>
                            <div className={"card padding-margin"}>
                            <div className={"col-12"}>
                                <h5><strong>Track 2</strong></h5>
                                <label>Genre: Rock</label>
                                <ReactAudioPlayer
                                src={require("./audio/sample/Bo Tutaj Jest Jak Jest.mp3")}
                                controls
                                style={{width: "100%"}}
                                />
                                <button className={"btn btn-danger"}>View Details</button>
                            </div>
                            </div>
                            <div className={"card padding-margin"}>
                            <div className={"col-12"}>
                                <h5><strong>Track 3</strong></h5>
                                <label>Genre: Rock</label>
                                <ReactAudioPlayer
                                src={require("./audio/sample/track1.mp3")}
                                controls
                                style={{width: "100%"}}
                                />
                                <button className={"btn btn-danger"}>View Details</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div id="footer">
                        <hr />
                        <div className={"text-center"}>
                            <label className="logo">
                                <img src={"./images/icons/guitar.png"} alt="logo" style={{color: "white"}} height={50}/>
                                &nbsp;
                                <span className="logo-text"><strong>GuitarBank &#169; {new Date().getFullYear()}</strong></span>
                            </label>
                        </div>
                        <div className={"text-center"}>
                            <h6>Design & Development: Thomas Owca</h6>
                        </div>
                        <hr />
                        <div className={"text-center"}>
                            <a href="https://www.thomasowca.com/">www.thomasowca.com</a>
                        </div>
                    </div>
                </div>
                {!this.state.showSettingsModal? <div></div> : <SettingsModal  
                    show={this.state.showSettingsModal} 
                    onCloseModal={this.closeSettingsModal}
                />}
                {!this.state.showUploadModal? <div></div> : <UploadModal  
                    show={this.state.showUploadModal} 
                    onCloseModal={this.closeUploadModal}
                />}
            </div>
        );
    }

    private closeSettingsModal = () => {
        this.setState({
            showSettingsModal: false
        });
    }

    private openSettingsModal = () => {
        this.setState({
            showSettingsModal: true
        })
    }

    private closeUploadModal = () => {
        this.setState({
            showUploadModal: false
        });
    }

    private openUploadModal = () => {
        this.setState({
            showUploadModal: true
        })
    }
}


export default App;
