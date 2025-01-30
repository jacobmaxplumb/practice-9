import axios from 'axios'
import React from 'react'

// Initial values
const initialFeedback = ''
const initialEmail = ''
const initialMoves = 0
const initialPlayerIndex = 4 // The "X" starts in the center of a 3×3 grid

const initialState = {
  feedback: initialFeedback,  // renamed from 'message'
  email: initialEmail,
  moves: initialMoves,        // renamed from 'steps'
  playerIndex: initialPlayerIndex,
}

export default class PracticeClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  getXY = () => {
    const x = this.state.playerIndex % 3;
    const y = Math.floor(this.state.playerIndex / 3);
    return [x, y];
  }

  // Reset state to all initial values
  resetState = () => {
    this.setState(initialState)
  }

  // Handle movement button clicks
  handleMove = (evt) => {
    const { id } = evt.target;
    switch(id) {
      case 'up':
        if (this.state.playerIndex < 3) {
          this.setState({ feedback: 'You cannot move up!' });
        } else {
          this.setState({ playerIndex: this.state.playerIndex - 3, moves: this.state.moves + 1, feedback: ''});
        }
        break;
      case 'down':
        if (this.state.playerIndex > 5) {
          this.setState({ feedback: 'You cannot move down!' });
        } else {
          this.setState({ playerIndex: this.state.playerIndex + 3, moves: this.state.moves + 1, feedback: ''});
        }
        break;
      case 'left':
        if (this.state.playerIndex % 3 === 0) {
          this.setState({ feedback: 'You cannot move left!' });
        } else {
          this.setState({ playerIndex: this.state.playerIndex - 1, moves: this.state.moves + 1, feedback: ''});
        }
        break;
      case 'right':
        if (this.state.playerIndex % 3 === 2) {
          this.setState({ feedback: 'You cannot move right!' });
        } else {
          this.setState({ playerIndex: this.state.playerIndex + 1, moves: this.state.moves + 1, feedback: ''});
        }
        break;
    }
  }

  // Handle email input changes
  handleInputChange = (evt) => {
  }

  // Pretend to submit form data
  handleSubmit = async (evt) => {
    evt.preventDefault()
    const [x, y] = this.getXY();
    const body = {x: x+1, y: y+1, steps: this.state.moves, email: this.state.email}
    const {data} = await axios.post('http://localhost:9000/api/result', body);
    this.setState({ feedback: data.message });
  }

  render() {
    return (
      <div id="wrapper" className='class-based'>
        
        <div className="info">
          <h3 id="coordinates">{}</h3>
          <h3 id="steps">
            You have moved {this.state.moves} time{this.state.moves === 1 ? '' : 's'}.
          </h3>
        </div>

        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div
                key={idx}
                className={`square${idx === this.state.playerIndex ? ' active' : ''}`}
              >
                {idx === this.state.playerIndex ? 'X' : null}
              </div>
            ))
          }
        </div>

        {/* ID is still #message but we call it "feedback" in our state */}
        <div className="info">
          <h3 id="message">{this.state.feedback}</h3>
        </div>

        <div id="keypad">
          <button id="left" onClick={this.handleMove}>LEFT</button>
          <button id="up" onClick={this.handleMove}>UP</button>
          <button id="right" onClick={this.handleMove}>RIGHT</button>
          <button id="down" onClick={this.handleMove}>DOWN</button>
          <button id="reset" onClick={this.resetState}>reset</button>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input id="submit" type="submit" />
        </form>
      </div>
    )
  }
}
