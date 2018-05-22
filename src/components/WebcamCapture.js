import React, { Component } from 'react';
import Webcam from 'react-webcam';

class WebcamCapture extends Component {

  constructor(props) {
    super(props);
    this.state = { photo: null };
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ photo: imageSrc });
  };

  render() {
    return (
      <div>
       <div>
        <img src={this.state.photo} alt="capture" />
       </div>
       <Webcam
         audio={false}
         height={350}
         ref={this.setRef}
         screenshotFormat="image/jpeg"
         width={350}
       />
       <button onClick={this.capture}>Capture photo</button>
     </div>
    )
  }
}

export default WebcamCapture
