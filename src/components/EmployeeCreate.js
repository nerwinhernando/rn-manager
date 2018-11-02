import React from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions'
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends React.Component {
    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(null, { employeeUpdate })(EmployeeCreate);
