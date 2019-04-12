import React from 'react';
import axios from 'axios';

class Faq extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: ''
    }
  }

  componentDidMount () {
    let path = window.location.pathname.slice(9);
    axios.get(path)
      .then((results) => {
        this.setState({data: results.data}, () => {
          console.log(this.state)
        });
      })
  }

  render () {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    )
  }
}

export default Faq;