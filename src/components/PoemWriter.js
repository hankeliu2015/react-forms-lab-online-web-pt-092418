import React, { Component } from 'react';

class PoemWriter extends Component {
  state = {
    poem: '',
    valid: false
  }



  render() {
    return (
      <div>
        <textarea value={this.state.poem} onChange={this.handleChange} rows="5" cols="50" />

        {this.state.valid ? null : <div id="poem-validation-error" style={{color: "red"}} >
          This poem is not written in the right structure!
        </div>}

      </div>
    )
  }
}

export default PoemWriter;
