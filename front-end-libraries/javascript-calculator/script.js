const numberid = ["zero","one","two","three","four","five","six","seven","eight","nine"];
const operatorid = ["equals","subtract","add","multiply","divide","decimal","clear"];
const symbol = [  "=","-","+","*","/",".","C"];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      output: "0"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var i = event.target.textContent;
    if (i == "C") {
      this.setState({
      input: 0,
      output: "0"
      });
    }
    else if (this.state.output.length > 20) {
      this.setState({
        input: "          DIGIT LIMIT",
        output: "          DIGIT LIMIT"
      })
    }
    else if (this.state.input == 0) {
        this.setState({
          input: i,
          output: i
        });
    } else if (i == "=") {
      this.setState({
        input: eval(this.state.input).toString(),
        output: this.state.output.toString() + "=" + eval(this.state.input).toString()
      })
    } else if (i == ".") {

      if (this.state.input.match(/\./g) == null ) {
        this.setState({
          input: this.state.input + i,
          output: this.state.output + i
        });
      }
      var arr = this.state.input.split("");
      for (var index = arr.length -1;index>0;index--) {
        if (symbol.slice(1, 5).includes(arr[index])) {
          this.setState({
            input: this.state.input + i,
            output: this.state.output + i
          });
          index = 0;
        }
        else if (arr[index] == ".") {
          index = 0;
        }
      }
    } else if(i == "-"){
      if (!((this.state.input.charAt(this.state.input.length - 1)) == i)) {
        this.setState({
          input: this.state.input + i,
          output: this.state.output + i
        });
        }
    } else if (i == "+") {
      if (symbol.slice(1, 5).includes(this.state.input.charAt(this.state.input.length - 1)) && symbol.slice(1, 5).includes(this.state.input.charAt(this.state.input.length - 2))) {
           this.setState({
        input: this.state.input.slice(0, this.state.input.length -2) + i,
        output: this.state.input.slice(0, this.state.input.length -2) + i
      })
          }
      else if (symbol.slice(1, 5).includes(this.state.input.charAt(this.state.input.length - 1))) {
        this.setState({
        input: this.state.input.slice(0, this.state.input.length -1) + i,
        output: this.state.input.slice(0, this.state.input.length -1) + i
      })
      }
      else {
        this.setState({
      input: this.state.input + i,
      output: this.state.output + i
    });
      }
    } else if (symbol.slice(1, 5).includes(i) && symbol.slice(1, 5).includes(this.state.input.charAt(this.state.input.length - 1))) {
      this.setState({
        input: this.state.input.slice(0, this.state.input.length -1) + i,
        output: this.state.input.slice(0, this.state.input.length -1) + i
      })
    } else {
    this.setState({
      input: this.state.input + i,
      output: this.state.output + i
    });
    }
  }
  
  render() {
    const numbers = numberid.map((x, i) => <button onClick={this.handleChange} id={x}>{i}</button>);
    const operators = operatorid.map((x,i) => <button onClick={this.handleChange} id={x}>{symbol[i]}</button>);
    return (
      <div id="calculator">
        <div id="output">
          <p>{this.state.output}</p>
        </div>
        <div id="display">
          <p>{this.state.input}</p>
        </div>
        {numbers}
        {operators}
      </div>
           );
  }
}
ReactDOM.render(<Calculator />, document.getElementById("app"));
