import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ExportToExcel extends Component{

    render(){
        return(
            <div style={{marginRight: '25px'}}>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="export"
                    table="table-to-xls"
                    filename="filtredData"
                    sheet="tablexls"
                    buttonText="Export"/>
                <table hidden="true" id="table-to-xls">
                    <thead>
                    <tr>
                        <th>Μελη της προτεινόμενης ομάδας μελέτης τα οποία έχουν συνεργαστεί και στο παρελθόν</th>
                        <th>Τίτλος Μελέτης</th>
                        <th>Φορέας Ανάθεσης</th>
                        <th>Ανάδοχο Μελετητικό Σχήμα</th>
                        <th>Έναρξη - Λήξη</th>
                        <th>Κύρια εκπονηθέντα στάδια</th>
                        <th>Πιστοποιητικό</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.projects.map(project => {
                            return(

                                <tr key={project._id}>
                                    <td>{project.projectTeams.map(a=>a.category).join('&, &')}</td>
                                    <td>{project.id }</td>
                                    <td>{project.title }</td>
                                    <td>{project.authority }</td>
                                    <td>{project.endDate ? project.startDate.concat(", ", project.endDate) : project.startDate }</td>
                                    <td>{project.projectTeams.map(a=>a.category).join('&, &')}</td>
                                    <td>"Υ/Δ"</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                    
            </div>
        )
    }
}
export default ExportToExcel;