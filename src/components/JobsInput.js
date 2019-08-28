import React, { Component } from 'react';

class JobsInput extends Component {

  state = {
    job: '',
    jobs: []
  }

  handleOnChange = (event) => {
    this.setState({
      job: event.target.value
    });
  }

  handleClick = (event) => {


  }

  render () {
    return (
      <form onSubmit={this.handleClick}>
        <input
        type="text"
        value={this.props.job}
        onChange={this.handleOnChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default JobsInput;
