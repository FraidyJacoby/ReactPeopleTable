import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {
    state = {
        people: [], 
        firstName: '',
        lastName: '',
        age:''
    }

    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }

    onLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    }

    onAgeChange = e => {
        this.setState({ age: e.target.value });
    }

    onAddClick = () => {
        const peopleCopy = [...this.state.people];
        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        };
        peopleCopy.push(person);
        this.setState({ people: peopleCopy, firstName: '', lastName:'', age:'' });
    } 

    onClearClick = () => {
        this.setState({ people: [] });
    }    

    render()
    {
        return (
            <div>
                <PersonForm onAddClick={this.addPerson}
                    onFirstNameChange={this.onFirstNameChange} firstNameValue={this.state.firstName}
                    onLastNameChange={this.onLastNameChange} lastNameValue={this.state.lastName}
                    onAgeChange={this.onAgeChange} ageValue={this.state.age} onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick} />
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map(p => <PersonRow firstName={p.firstName} lastName={p.lastName} age={p.age}
                            background={{backgroundColor: p.age > 65 ? 'red' : 'none'}} />)}
                    </tbody>
                </table>
            </div>
            );
    }
}

export default PeopleTable;