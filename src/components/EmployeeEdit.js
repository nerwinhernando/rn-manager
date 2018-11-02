import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave } from '../actions';
class EmployeeEdit extends React.Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        //console.log(name, phone, shift);
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    onTextPress() {

    }

    render() {
        return(
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        );    
    }
}

const mapStateToProps = (state, ownProps) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
