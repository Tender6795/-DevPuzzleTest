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
    if(this.props.vacationDayCountFree<=0){
      this.setState({
        day: moment().format('YYYY-MM-DD'),
        status: 'No more days left',
      });
    }
    else {

      if (!moment(this.state.day).isValid()) {
        this.setState({
          day: moment().format('YYYY-MM-DD'),
          status: 'Not valid date',
        });
      } else {
        axios.post('http://localhost:4000/api/vacationDay', {day: this.state.day})
          .then(res => {
            this.props.updateData(this.state.day);
            this.setState({
              day: this.state.day,
              status: 'Done',
            })
          }).catch(err => {
            let message='';
            console.dir(err);
if(err.response){
  message=err.response.data.message
}else{
  message=err.message;
}
          this.setState({
            day: this.state.day,
            status: message,
          })
        })
      }
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