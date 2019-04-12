import React from 'react';

class QA extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listOpen: false
    }

    this.setState= this.setState.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }
  toggleList () {
    this.setState({listOpen: !this.state.listOpen});
  }

  render () {
    return (
      <div onClick={() => this.toggleList()}>
        <h6>{this.props.question}</h6>
        {this.state.listOpen
        ? this.props.answer
        : null
        }
      </div>
    )
  }
}