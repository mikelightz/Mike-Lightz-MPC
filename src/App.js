import React from "react";
import "./App.css";

const buttons = [
  {
    id: "Chord 1",
    letter: "Q",
    src: "https://mike-lightz-beat-machine-sounds.s3.amazonaws.com/load/OS_BB_130_G%23M_BRASSETTE_THICK_SYNTH_CHORDS.wav",
  },
  {
    id: "Chord 2",
    letter: "W",
    src: "https://mike-lightz-beat-machine-sounds.s3.amazonaws.com/load/SO_3WRB_V1_FR3_SYNTH_chord_one_Shot_Ab_minor_01.wav",
  },
  {
    id: "Snap",
    letter: "E",
    src: "https://mike-lightz-beat-machine-sounds.s3.amazonaws.com/load/Snap_SafePlace.wav",
  },
  {
    id: "Perc",
    letter: "A",
    src: "https://mike-lightz-beat-machine-sounds.s3.amazonaws.com/load/MURDA_rim_shade.wav",
  },
  {
    id: "Clap",
    letter: "S",
    src: "https://mike-lightz-beat-machine-sounds.s3.amazonaws.com/load/Clap_Wheels.wav",
  },
  {
    id: "Open-HH",
    letter: "D",
    src: "https://mike-lightz-beat-machine-sounds.s3.amazonaws.com/load/HHo_Wheels1.wav",
  },
  {
    id: "Kick",
    letter: "Z",
    src: "https://mike-lightz-beat-machine-sounds.s3.amazonaws.com/load/BD_BetterHome1.wav",
  },
  {
    id: "Snare",
    letter: "X",
    src: "https://mike-lightz-beat-machine-sounds.s3.amazonaws.com/load/SD_Rubicon.wav",
  },
  {
    id: "Closed-HH",
    letter: "C",
    src: "https://mike-lightz-beat-machine-sounds.s3.amazonaws.com/load/HH_Fortuna2.wav",
  },
];

class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("Keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <p>{this.props.letter}</p>
        <audio
          ref={(ref) => (this.audio = ref)}
          id={this.props.letter}
          className="clip"
          src={this.props.src}
        ></audio>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
  }

  handleDisplay = (display) => this.setState({ display });

  render() {
    return (
      <div>
        <h1>Mike Lightz MPC 3000</h1>
        <div id="container">
          <div id="drum-machine">
            <button id="drum-pads">
              {buttons.map((button) => (
                <DrumPad
                  id={button.id}
                  letter={button.letter}
                  src={button.src}
                  handleDisplay={this.handleDisplay}
                />
              ))}
            </button>
            <div id="container-two">
              <div id="display">{this.state.display}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
