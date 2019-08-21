import React, {Component} from 'react';
import {Container, Button, Message} from 'semantic-ui-react'
import moment from 'moment';
import axios from 'axios';


class VacationDayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: moment().format('YYYY-MM-DD'),
      status: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({day: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    if (!moment(this.state.day).isValid()) {
      this.setState({
        day: moment().format('YYYY-MM-DD'),
        status: 'Not valid date',
      });
    } else {
      // alert(this.state.day);
      axios.post('http://localhost:4000/api/vacationDay',{day: this.state.day})
        .then(res => {
          this.setState({
            day: this.state.day,
            status: 'Done',
          })
        }).catch(err => {
        this.setState({
          day: moment().format('YYYY-MM-DD'),
          status: err.response.data.message,
        })
        console.dir(err);
      })
    }
  }


  render() {
    return (
      <Container>
        < input type="date"
                name="day"
                value={this.state.day}
                onChange={this.onChange}
                min={moment().format('YYYY-MM-DD')}
        />
        <Button onClick={this.onSubmit}>Add</Button>
        <Message content={this.state.status}/>
      </Container>
    )
  }
}

export default VacationDayForm;