import React,  {Component} from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




export default class CreateProject extends Component {
    constructor(props) {
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this);

        this.onChangeShort = this.onChangeShort.bind(this);

        this.onChangeAuthority = this.onChangeAuthority.bind(this);

        this.onChangeDetails = this.onChangeDetails.bind(this);

        this.onChangeIcode = this.onChangeIcode.bind(this);

        this.onChangeStartDate = this.onChangeStartDate.bind(this);

        this.onChangeEndDate = this.onChangeEndDate.bind(this);

        this.onChangeCategory = this.onChangeCategory.bind(this);

        this.onChangeCompany = this.onChangeCompany.bind(this);

        this.onChangePay = this.onChangePay.bind(this);

        this.onChangePercentage = this.onChangePercentage.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',                 
            short: '',
            authority: '',
            details: '',
            icode: 0,
            startDate: new Date(),
            endDate: "",
            category: '',
            company: '',
            pay: 0,
            percentage: 0,
            companies: []
        }
    }

    componentDidMount() {
        this.setState({
            companies: ['test company'],
            company: 'test company'
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
    onChangeDetails(e) {
        this.setState({
            details: e.target.value
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
            details: this.state.details,
            icode: this.state.icode,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            category: this.state.category,
            company: this.state.company,
            pay: this.state.pay,
            percentag: this.state.percentage
        }

        console.log(project);
        window.location = '/';
    }

    render() {
        return (

            <div>
                <h3>Create New Project</h3>
                <form onSubmit={this.onSubmit}>
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
                    <label>Short Title: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.short}
                        onChange={this.onChangeShort}
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
                    <div className="form-group">
                    <label>Ilida Code: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.icode}
                        onChange={this.onChangeIcode}
                        />
                    </div>

                    <div className="form-group">
                    <label>Start Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.startDate}
                        onChange={this.onChangeStartDate}
                        />
                    </div>
                    </div>

                    <div className="form-group">
                    <label>End Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.endDate}
                        onChange={this.onChangeEndDate}
                        />
                    </div>
                    </div>

                    <div className="form-group"> 
                    <label>Category: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.category}
                        onChange={this.onChangeCategory}
                        />
                    </div>

                    <div className="form-group"> 
                    <label>Company: </label>
                    <select ref="companyInput"
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


                    <div className="form-group">
                    <label>Pay: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.pay}
                        onChange={this.onChangePay}
                        />
                    </div>
                    <div className="form-group">
                    <label>Percentage: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.percentage}
                        onChange={this.onChangePercentage}
                        />
                    </div>


                    <div className="form-group">
                    <input type="submit" value="Create Project Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>



        )
    }
}