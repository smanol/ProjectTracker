import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Company = props => (

  <tr>
  <td>{props.company.name}</td>

  <td>

 <a href="#" onClick={() => { props.deleteCompany(props.company._id) }}>delete</a>
  </td>
</tr>
)

export default class CreateCompany extends Component {
  constructor(props) {
    super(props);
    this.deleteCompany = this.deleteCompany.bind(this)
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      companies: []
    }
  }
  componentDidMount() {

    let url = BASE_URL+'/companies/'
    axios.get(url)
        .then(response => {
            this.setState({companies: response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
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

    let url = BASE_URL + '/companies/add'

    axios.post(url, company)
      .then(res => console.log(res.data));

    this.setState({
      companies: [...this.state.companies,company],
      name: ''
    })


  }

  deleteCompany(id) {
    let url = BASE_URL + '/companies/' +id
    axios.delete(url)
      .then(response => { console.log(response.data)});

    this.setState({
      companies: this.state.companies.filter(el => el._id !== id)
    })
  }
  
  companiesList() {
    return this.state.companies.map((currentCompany)=>{
      return <Company company={currentCompany} deleteCompany={this.deleteCompany} key ={currentCompany._id}/>
    }
    )
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
        <table className="table">
          <thead className="thead-light">
          <tr>
              <th>Company</th>
              <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            { this.companiesList() }
          </tbody>
        </table>
      </div>
    )
  }
}