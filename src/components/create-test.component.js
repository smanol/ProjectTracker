import React,  {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CurrencyInput from 'react-currency-input';
import NumberFormat from 'react-number-format';
import CurrencyFormat from 'react-currency-format';


// const BASE_URL = process.env.REACT_APP_BASE_URL;

const categories =  
        [
            "1. Χωροταξικές και Ρυθμιστικές Μελέτες",
            "2. Πολεοδομικές και Ρυμοτομικές Μελέτες",
            "3. Μελέτες Οικονομικές",
            "4. Μελέτες Κοινωνικές",
            "5. Μελέτες οργανώσεως και επιχειρησιακής έρευνας",
            "6. Αρχιτεκτονικές Μελέτες Κτιριακών Έργων",
            "7. Ειδικές Αρχιτεκτονικές Μελέτες",
            "8. Στατικές Μελέτες",
            "9. Ηλεκτρομηχανολογικές Μελέτες",
            "10. Μελέτες Συγκοινωνιακών Έργων",
            "11. Μελέτες Λιμενικών Έργων",
            "12. Μελέτες Μεταφορικών Μέσων",
            "13. Μελέτες Υδραυλικών Έργων",
            "14. Ενεργειακές Μελέτες",
            "15. Μελέτες Βιομηχανιών.",
            "16. Μελέτες Τοπογραφίας",
            "17. Χημικές Μελέτες και Έρευνες",
            "18. Χημικοτεχνικές Μελέτες",
            "19. Μεταλλευτικές Μελέτες και Έρευνες",
            "20. Γεωλογικές Μελέτες και Έρευνες",
            "21. Γεωτεχνικές Μελέτες και Έρευνες",
            "22. Εδαφολογικές Μελέτες και Έρευνες",
            "23. Γεωργικές Μελέτες",
            "24. Μελέτες Δασικές",
            "25. Φυτοτεχνικές Μελέτες ",
            "26. Μελέτες Αλιευτικές",
            "27. Περιβαλλοντικές Μελέτες",
            "28. Μελέτες Πληροφορικής και Δικτύων"
        ]

const ProjectTeam = props => (

    <tr>
    <td style={{width: "30%"}}>{categories[props.projectTeam.category-1]}</td>
    <td style={{width: "30%"}}>{props.projectTeam.company}</td>
    <td style={{width: "15%"}}>{props.projectTeam.percentage} %</td>
    <td style={{width: "15%"}}><CurrencyFormat value={props.projectTeam.pay} displayType={'text'} decimalSeparator=',' thousandSeparator='.' suffix=' &euro;' renderText={value => 
    <div>{value}</div>} />
    </td>
    <td style={{width: "15%", }}>
  
    <a href="/#" onClick={() => { props.deleteProjectTeam(props.projectTeam.category, props.projectTeam.company) }}>delete</a>
    </td>


    </tr>
  )

export default class CreateTest extends Component {
    constructor(props) {
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this);

        this.deleteProjectTeam = this.deleteProjectTeam.bind(this)

        this.onChangeShort = this.onChangeShort.bind(this);

        this.onChangeAuthority = this.onChangeAuthority.bind(this);

        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.onChangeIcode = this.onChangeIcode.bind(this);

        this.onChangeStartDate = this.onChangeStartDate.bind(this);

        this.onChangeEndDate = this.onChangeEndDate.bind(this);

        this.onChangeCategory = this.onChangeCategory.bind(this);

        this.onChangeCompany = this.onChangeCompany.bind(this);

        this.onChangePay = this.onChangePay.bind(this);

        this.onChangePercentage = this.onChangePercentage.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.onAddTeam = this.onAddTeam.bind(this);

        this.state = {
            title: '',                 
            short: '',
            authority: '',
            description: '',
            icode: '',
            startDate: new Date(),
            endDate: '',
            category: '',
            company: '',
            pay: '',
            percentage: '100 %' ,
            companies: [],
            projectTeams:[],
                

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/companies/').then( response => {
            if (response.data.length > 0) {
                this.setState( {
                    companies: response.data.map((comp) => comp.name),
                    company: response.data[0].name
                })
            }
        })
    }


    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeShort(e) {
        this.setState({
            short: e.target.value
        });
    }
    onChangeAuthority(e) {
        this.setState({
            authority: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeIcode(e) {
        this.setState({
            icode: e.target.value
        });
    }
    onChangeStartDate(date) {
        this.setState({
            startDate: date
        });
    }
    onChangeEndDate(date) {
        this.setState({
            endDate: date
        });
    }
    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    onChangeCompany(e) {
        this.setState({
            company: e.target.value
        });
    }
    onChangePay(e) {
        this.setState({
            pay: e.target.value
        });
    }
    onChangePercentage(e) {
        this.setState({
            percentage: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const project = {
            title: this.state.title,
            short: this.state.short,
            authority: this.state.authority,
            description: this.state.description,
            icode: this.state.icode,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            projectTeams: this.state.projectTeams
        }

        

        console.log(project);

        axios.post('http://localhost:5000/tests/add', project)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    onAddTeam(){

        let projectTeam = {
            category: parseInt(this.state.category),
            company: this.state.company,
            pay: parseFloat(this.state.pay.replace(/\./g,'').replace(',', '.')),
            percentage:  parseInt(this.state.percentage),
        }

        if (Boolean(projectTeam.category) && Boolean(projectTeam.company) && Boolean(projectTeam.pay) && Boolean(projectTeam.percentage)){


        this.setState({           
            projectTeams: [...this.state.projectTeams,projectTeam],
            category: '',
            company: this.state.companies[0],
            pay: '',
            percentage: '100 %'
          }, 
          () => console.log(this.state.projectTeams))}


        }
        projectsList() {
            return this.state.projectTeams.map((currentProjectTeam, index)=>{
              return <ProjectTeam projectTeam={currentProjectTeam} deleteProjectTeam={this.deleteProjectTeam} key ={index}/>
            }
            
            )


          }
          
    deleteProjectTeam(category, company) {
        console.log("The company is!!!", company)
        this.setState({
        projectTeams: this.state.projectTeams.filter(pt => {return (pt.category !== category || pt.company !==company )})

        }, console.log(this.state.projectTeams))
    }

    render() {
        return (

            <div>
                <h3>Create New Project</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group row">
                    <div className="col-sm-2">
                    <label>Start Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.startDate}
                        onChange={this.onChangeStartDate}
                        />
                    </div>

                    </div>

                    <div className="col-sm-2">
                    <label>End Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.endDate}
                        onChange={this.onChangeEndDate}
                        />
                    </div>
                    </div>
                    <div className="col-sm-6">

                    </div>
                    <div className="col-sm-2 d-flex justify-content-end">

                    <input type="submit" value="Create Project Log" className="btn btn-primary " />
                    </div>
                    </div>
                <div className="form-group row"> 
                    

                <div className="col-sm-3">
                    <label>Ilida Code: </label>
                    <input 
                        type="text" pattern="[0-9]*"
                        className="form-control"
                        value={this.state.icode}
                        onChange={this.onChangeIcode}
                        />
                    </div>   
                    <div className="col-sm-6"> 
                    <label>Short Title: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.short}
                        onChange={this.onChangeShort}
                        />
                    </div>
                    <div className="col-sm-3"> 
                    <label>State: </label>
                    <select ref={this.stateInput}
                        required
                        className="form-control">
                            <option>Διαγωνισμός</option>
                            <option>Ανάθεση</option>
                            <option>Ενεργό</option>
                            <option>Ολοκληρωμένο</option>
                            <option>Παύση</option>
                            <option>Εκρεμεί</option>
                    </select>
                    </div>

                </div>

                    

                    <div className="form-group"> 
                    <label>Project Title: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
                    </div>

                    <div className="form-group"> 
                    <label>Authority: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.authority}
                        onChange={this.onChangeAuthority}
                        />
                    </div>
                    <div className="form-group"> 
                    <label>Description: </label>
                    <textarea 
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                        {/*row*/}
                    <div className="form-group row"> 
                    <div className="col-sm-3"> 
                    <label>Category: </label>
                    <select  type="text"
                        required
                        className="form-control"
                        value={this.state.category}
                        onChange={this.onChangeCategory}
                        >

        {categories.map((category)=>{return <option key={parseInt(category)} >{category}</option>})}




                    </select>
                    </div>
                    <div className="col-sm-4"> 
                    <label>Company: </label>
                    <select ref={this.companyInput}
                        required
                        className="form-control"
                        value={this.state.company}
                        onChange={this.onChangeCompany}>
                        {
                            this.state.companies.map(function(company) {
                            return <option 
                                key={company}
                                value={company}>{company}
                                </option>;
                            })
                        }
                    </select>
                    </div>
                    <div className="col-sm-2">
                    <label>Percentage: </label>
                    <NumberFormat  
                        type="int" 
                        format={
                            (val) => {
                                if (val <= 100) {
                                    if (val && val.length > 3)
                                        return this.state.coverage + " %";
                                    return val + " %";
                                } else {
                                    return this.state.coverage + " %";
                                }
                            }
                        }
                        className="form-control"
                        value={this.state.percentage}
                        onChange={this.onChangePercentage}
                        />
                    </div>

                    <div className="col-sm-2">
                    <label>Pay: </label>


                    <CurrencyInput decimalSeparator="," thousandSeparator="." suffix="&euro;" className="form-control" value={this.state.pay} onChangeEvent={this.onChangePay}/>

                    </div>
                    

                    <div className="col-sm-1">
                    <label>Action: </label>
                        <input value="Add" className="btn btn-primary" type="button" onClick={this.onAddTeam}/>
                    </div>

                    </div>

{/*row*/}
                </form>



                <table className="table">
                <caption>List of Project Teams</caption>
                <tbody>
                  { this.projectsList() } 
                </tbody>
            </table>



            </div>



        )
    }
}