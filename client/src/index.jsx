import React from 'react';
import ReactDOM from 'react-dom';
import Faq from './components/Faq.jsx';

class FeaturesSpecs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listOpen: false
    }

    this.setState = this.setState.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }
      toggleList () {
        this.setState({listOpen: !this.state.listOpen});

  }
  render () {
    return (
      <div onClick={()=> this.toggleList()}>
        <h3>Features and Specs</h3>
        {this.state.listOpen
          ? <Faq />
          : null
        }
      </div>
    )
  }
}

ReactDOM.render(<FeaturesSpecs/>, document.getElementById('FeaturesSpecs') || document.createElement('div'));