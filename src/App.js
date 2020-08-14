import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import ProjectsList from "./components/projects-list.component";
import EditProject from "./components/edit-project.component";
import CreateProject from "./components/create-project.component";
import CreateCompany from "./components/create-company.component";




function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ProjectsList} />
      <Route path="/edit/:id" component={EditProject} />
      <Route path="/create" component={CreateProject} />
      <Route path="/company" component={CreateCompany} />
      </div>
    </Router>
  );
}

export default App;
