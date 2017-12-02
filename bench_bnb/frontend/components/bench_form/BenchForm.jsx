import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class BenchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      num_seats: "",
      lat: "",
      lng: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.lat && this.props.lng) {
      this.setState({
        lat: this.props.lat,
        lng: this.props.lng
      })
    }
  }

  handleSubmit() {
    
    this.props.createBench(this.state);
    this.props.history.push('/');
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value });
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>Description:
            <input type="text"
              value={this.state.description}
              onChange={this.update('description')}
              />
          </label>
          <br/>
          <label>Number of seats:
            <input type="number"
              value={this.state.num_seats}
              onChange={this.update('num_seats')}
              step='1'
              />
          </label>
          <br/>
          <label>Latitude:
            <input type="number"
              value={this.state.lat}
              onChange={this.update('lat')}
              step='any'
              />
          </label>
          <br/>
          <label>Longitude:
            <input type="number"
              value={this.state.lng}
              onChange={this.update('lng')}
              step='any'
              />
          </label>
          <button onClick={this.handleSubmit}>Create Bench</button>
        </form>
      </div>
    );
  }
}

export default withRouter(BenchForm);