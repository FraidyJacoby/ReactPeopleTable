import React from 'react';

class PersonRow extends React.Component {
    render() {
        return (
            <tr style={this.props.background}>
                    <td>{this.props.firstName}</td>
                    <td>{this.props.lastName}</td>
                    <td>{this.props.age}</td>
                </tr>
        );
    }
}

export default PersonRow;