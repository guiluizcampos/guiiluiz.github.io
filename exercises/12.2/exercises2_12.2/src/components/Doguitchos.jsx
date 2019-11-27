import React from 'react';

class Doguitchos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({data: data.message}))
  }

  render() {
    return(
      <div>
        <h2>DOGUITCHOS!!</h2>
        <img src={this.state.data} alt="Random Dog" />
      </div>
    );
  }
}

export default Doguitchos;
