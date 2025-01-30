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

  // Calculate [x, y] based on the current playerIndex
  getXY = () => {
  }

  // Return "Location (x, y)" instead of "Coordinates (x, y)"
  getLocationMessage = () => {
  }

  // Reset state to all initial values
  resetState = () => {
  }

  // Calculate the next index based on direction
  calculateNextIndex = (direction) => {
    
  }

  // Handle movement button clicks
  handleMove = (evt) => {
  }

  // Handle email input changes
  handleInputChange = (evt) => {
  }

  // Pretend to submit form data
  handleSubmit = (evt) => {
  }

  render() {
    const { className } = this.props
    const { feedback, email, moves, playerIndex } = this.state
    const [x, y] = [0, 0] // this.getXY()

    return (
      <div id="wrapper" className={className}>
        
        <div className="info">
          <h3 id="coordinates">{}</h3>
          <h3 id="steps">
            You have moved {moves} time{moves === 1 ? '' : 's'}.
          </h3>
        </div>

        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div
                key={idx}
                className={`square${idx === playerIndex ? ' active' : ''}`}
              >
                {idx === playerIndex ? 'X' : null}
              </div>
            ))
          }
        </div>

        {/* ID is still #message but we call it "feedback" in our state */}
        <div className="info">
          <h3 id="message">{feedback}</h3>
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
            value={email}
            onChange={this.handleInputChange}
          />
          <input id="submit" type="submit" />
        </form>
      </div>
    )
  }
}
