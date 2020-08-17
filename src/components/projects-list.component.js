import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Project = props => (

  <tr>
  <td>{props.project.icode}</td>
  <td>{props.project.short}</td>
  <td>{props.project.title}</td>
  <td>{props.project.authority}</td>
  <td>{props.project.category}</td>
  <td>{props.project.startDate.substring(0,10)}</td>
  <td></td>

  <td>

  <Link to={"/edit/"+props.project._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProject(props.project._id) }}>delete</a>
  </td>
</tr>
)


export default class ProjectsList extends Component {

    constructor(props) {
        super(props);
        this.deleteProject = this.deleteProject.bind(this)

        this.state = {projects: []}
    }

    componentDidMount() {

        let url = BASE_URL+'/projects/'
        axios.get(url)
            .then(response => {
                this.setState({projects: response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    deleteProject(id) {
        let url = BASE_URL + '/projects/' +id
        axios.delete(url)
          .then(response => { console.log(response.data)});

        this.setState({
          projects: this.state.projects.filter(el => el._id !== id)
        })
      }

      projectsList() {
        return this.state.projects.map((currentProject)=>{
          return <Project project={currentProject} deleteProject={this.deleteProject} key ={currentProject._id}/>
        }
        )
      }
    
    render() {
        return (
            <div>
              <h3>Logged Projects</h3>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Ilida Code</th>
                    <th>Short Title</th>
                    <th>Title</th>
                    <th>Authrority</th>
                    <th>Categories</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  { this.projectsList() }
                </tbody>
              </table>
            </div>
          )
    }
}