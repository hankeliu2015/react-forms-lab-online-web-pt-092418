import React, { Component } from 'react';

class PoemWriter extends Component {
  render() {
    return (
      <div>
        <textarea rows="5" cols="50" />
        <div id="poem-validation-error" style={{color: "red"}}>
          This poem is not written in the right structure!
        </div>

      </div>
    )
  }
}

export default PoemWriter;
