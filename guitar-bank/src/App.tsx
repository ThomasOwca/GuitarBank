import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import  './App.scss';
import 'font-awesome/css/font-awesome.min.css';
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.


class App extends React.Component<any, any> {
  componentDidMount() {
    // let chart = this.refs.chart.getChart();
    // chart.series[0].addPoint({x: 10, y: 12});
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
      colors: ["#DC3545", /*"#E04958",*/ "#E35D6A", /*"#E7727D",*/ "#EA868F", /*"#EE9AA2",*/ "#F1AEB5", /*"#F5C2C7",*/ "#F8D7DA"/*, "#FCEBEC"*/]
    };

    const tracks = [{ img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg', name:'Bo Tutaj Jest Jak Jest', desc: 'Description 1', src:'../src/audio/sample/Bo Tutaj Jest Jak Jest.mp3'},
      { img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg', name:'Bill W', desc: 'Description 2', src:'../src/audio/sample/Bill W.mp3'}]
 
    const playlistOverideStylingOpts = {
      
    };

    const audioPlayerElement = <ReactAudioPlayer
      src={require("./audio/sample/track1.mp3")}
      controls
      style={{width: "100%"}}
    />;

    console.log(audioPlayerElement);

    return (
        <div>
            <div id={"header"}>
                <div className={"row"}>
                    <div className={"col-10"}>
                    <label className="logo">
                        <img src={"./images/icons/guitar.png"} alt="logo" style={{color: "white"}} height={50}/>
                        &nbsp;
                        <span className="logo-text">GuitarBank</span>
                    </label>
                    </div>
                    <div className={"col-2"}>
                    <div id={"settings"}>
                        <span>
                        <i className="fa fa-cog"></i>
                        <button className={"btn btn-outline-danger settings"}>Settings</button>
                        </span>
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
					<h6><strong>Design & Development: Thomas Owca</strong></h6>
                    <a href="https://www.thomasowca.com/">www.thomasowca.com</a>
                </div>
                <hr />
            </div>
        </div>
    );
  }
}


export default App;
