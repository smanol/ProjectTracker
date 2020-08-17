import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Project = props => (

  <tr>
  <td>{props.project.icode}</td>
  
  <td >{props.project.short}</td>
  <td>{props.project.authority}</td>
  <td >{props.project.projectTeams.map(a=>a.category).join(', ')}</td>
  <td>{props.project.startDate.substring(0,10)}</td>
  <td>{Boolean(props.project.endDate)?props.project.endDate.substring(0,10):''}</td>


  <td>

  <Link to={"/edit/"+props.project._id}>edit</Link> | <a href="/#" onClick={() => { props.deleteProject(props.project._id) }}>delete</a>
  </td>
</tr>
)


export default class ProjectsList extends Component {

    constructor(props) {
        super(props);
        this.deleteProject = this.deleteProject.bind(this)
        this.onChangeFilter = this.onChangeFilter.bind(this);

        this.state = {projects: [], projectsCopy: []}
    }

    componentDidMount() {

        let url = BASE_URL+'/tests/'
        axios.get(url)
            .then(response => {
                this.setState({projects: response.data, projectsCopy: response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    onChangeFilter(e) {
      console.log(e.target.value);

      let arr1 = e.target.value.split(',').map((a)=>a.trim());
      console.log('length',e.target.value.length);
      let array = this.state.projects.filter((a1)=>(arr1.some((b1)=> a1.projectTeams.some((c1)=>(c1.category==b1))) ))
      this.setState({
        projectsCopy : array
      }, () => (console.log("projects",this.state.projectsCopy)))


      if (e.target.value == 0){
        this.setState({
          projectsCopy : this.state.projects
        })
      }
    }



    

    deleteProject(id) {
        let url = BASE_URL + '/tests/' +id
        axios.delete(url)
          .then(response => { console.log(response.data)});

        this.setState({
          projects: this.state.projects.filter(el => el._id !== id)
        })
      }

      projectsList() {
        return this.state.projectsCopy.map((currentProject)=>{
          return <Project project={currentProject} deleteProject={this.deleteProject} key ={currentProject._id}/>
        }
        )
      }
    
    render() {
        return (
            <div>
               <div className="form-group"> 
                <label style={{'font-weight': 'bold', marginRight: 5}}>Filter: </label>
              <input onChange={this.onChangeFilter}></input>
              </div>
              <h3>Logged Projects</h3>
              <table className="table">
                <thead className="thead-light">

                  <tr>

                    <th style={{width: "5%"}}>Code</th>

                    <th style={{width: "20%"}}>Short Title</th>

                    <th style={{width: "20%"}}>Authrority</th>

                    <th style={{width: "10%" ,'textAlign':'right'}}>Categories</th>

                    <th style={{width: "10%",'textAlign':'right'}}>Start Date</th>

                    <th style={{width: "10%",'textAlign':'right'}}>End Date</th>

                    <th style={{'textAlign':'right'}}>Actions</th>

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