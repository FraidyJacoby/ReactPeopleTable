import React from 'react';

class PersonForm extends React.Component {
    render() {
        return (
            <div className="row">
                <input type="text" className="form-control col-md-3" value={this.props.firstNameValue} onChange={this.props.onFirstNameChange} />
                <input type="text" className="form-control col-md-3" value={this.props.lastNameValue} onChange={this.props.onLastNameChange} />
                <input type="text" className="form-control col-md-3" value={this.props.ageValue} onChange={this.props.onAgeChange} />
                <br />

                <button className="btn btn-primary" onClick={this.props.onAddClick}>Add</button>
                <button className="btn btn-danger" onClick={this.props.onClearClick}>Clear</button>
            </div>
        );
    }
}

export default PersonForm;