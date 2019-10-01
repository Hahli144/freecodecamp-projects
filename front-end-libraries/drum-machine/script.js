class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "SFX",
      volume: 50
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }
  handleClick(event) {
    var sound = document.getElementById(event.currentTarget.textContent);
    sound.currentTime = 0;
    sound.volume = this.state.volume / 100;
    sound.play();
    this.setState({
      display: event.currentTarget.id
    });
  }
  handleKeyPress(event) {
    document.getElementById(event.key.toUpperCase()).click();
  }
  handleSlider(event) {
    this.setState({
      volume: document.getElementById("slider").value
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="buttons">
          <button class="drum-pad" id="Kick1" onClick={this.handleClick}>
            Q
            <audio
              src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/74[kb]bunchakiks43.wav.mp3"
              class="clip"
              id="Q"
            />
          </button>
          <button class="drum-pad" id="Kick2" onClick={this.handleClick}>
            W
            <audio
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/74[kb]kick2.aif.mp3"
              class="clip"
              id="W"
            />
          </button>
          <button class="drum-pad" id="Snare1" onClick={this.handleClick}>
            E
            <audio
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-SNARE1.aif.mp3"
              class="clip"
              id="E"
            />
          </button>
          <button class="drum-pad" id="Hi-Hat" onClick={this.handleClick}>
            A
            <audio
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/24[kb]808-hh03.wav.mp3"
              class="clip"
              id="A"
            />
          </button>
          <button class="drum-pad" id="Snare2" onClick={this.handleClick}>
            S
            <audio
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Extended/33[kb]808-sd09.wav.mp3"
              class="clip"
              id="S"
            />
          </button>
          <button class="drum-pad" id="Clap" onClick={this.handleClick}>
            D
            <audio
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/31[kb]handclap.aif.mp3"
              class="clip"
              id="D"
            />
          </button>
          <button class="drum-pad" id="Snare3" onClick={this.handleClick}>
            Z
            <audio
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/8[kb]snare.aif.mp3"
              class="clip"
              id="Z"
            />
          </button>
          <button class="drum-pad" id="Tom" onClick={this.handleClick}>
            X
            <audio
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/17[kb]hightom.aif.mp3"
              class="clip"
              id="X"
            />
          </button>
          <button class="drum-pad" id="Tom2" onClick={this.handleClick}>
            C
            <audio
              src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/15[kb]hi_conga.aif.mp3"
              class="clip"
              id="C"
            />
          </button>
        </div>
        <div id="side">
          <div id="display">
            <h1>{this.state.display}</h1>
            <h2>Volume: {this.state.volume}</h2>
          </div>
          <div>
            <input id="slider" type="range" onInput={this.handleSlider} />
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
