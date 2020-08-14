import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCompany extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const company = {
      name: this.state.name
    }

    console.log(company);

    axios.post('http://localhost:5000/companies/add', company)
      .then(res => console.log(res.data));

    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Company</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Company Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Company" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}