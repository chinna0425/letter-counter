import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputval: ''}

  searchele = event => {
    this.setState({inputval: event.target.value})
  }

  render() {
    const {inputval} = this.state
    return (
      <div className="background-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          className="imageset"
          alt="letters calculator"
        />
        <div className="inner-container">
          <h1 className="heading">Calculate the Letters you entered</h1>
          <div className="search-box">
            <label htmlFor="inputlabel" className="paragraph">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              id="inputlabel"
              placeholder="Enter the phrase"
              className="inputstyle"
              onChange={this.searchele}
              value={inputval}
            />
            <p className="button-style">No.of letters: {inputval.length}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
