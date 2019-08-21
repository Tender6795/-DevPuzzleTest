import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import moment from 'moment';



class VacationDayForm extends Component {
  constructor(props) {
    super(props);
    const now = moment().format('YYYY-MM-DD');
    this.state = {
      day: now,
    };
    this.onChange = this.onChange.bind(this);
  }


  onChange(e) {
    this.setState({day: e.target.value});
  }

  render() {
    return (
      <Container>
        < input type="date"
                name="day"
                value={this.state.day}
                onChange={this.onChange}
                min={ moment().format('YYYY-MM-DD')}
        />
      </Container>
    )
  }
}

export default VacationDayForm;