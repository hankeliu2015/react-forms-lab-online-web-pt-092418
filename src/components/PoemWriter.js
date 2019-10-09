import React, { Component } from 'react';

class PoemWriter extends Component {
  state = {
    poem: '',
    valid: false
  }

  handleChange = (e) =>  {
    this.setState({
      [e.target.name]: e.target.value,
      valid: this.isValid(this.state.poem)
    })
  }

  isValid(poem) {
    // console.log(poem)
    // how to define a line in string.
    const poemArray = poem.split('\n').filter(n=> n)

    if (poemArray.length === 3) {
      return this.countWords(poemArray[0]) === 5  && this.countWords(poemArray[1]) === 3 && this.countWords(poemArray[2]) === 5
    }

  }

  countWords = (singleLine) => {
    return singleLine.split(' ').filter(n=> n).length
  }

  render() {
    return (
      <div>
        <textarea value={this.state.poem} onChange={this.handleChange} name="poem" rows="5" cols="50" />

        {this.state.valid ? null : <div id="poem-validation-error" style={{color: "red"}} >
          This poem is not written in the right structure!
        </div>}

      </div>
    )
  }
}

export default PoemWriter;
