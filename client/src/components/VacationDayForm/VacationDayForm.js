import React, {Component} from 'react';
import {Container, Button} from 'semantic-ui-react'
import moment from 'moment';
import axios from 'axios';
import style from './VacationDayForm.module.css';



class VacationDayForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: moment().add(1, 'days').format('YYYY-MM-DD'),
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({day: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.vacationDayCountFree <= 0) {
      alert('No more days left');
      this.setState({
        day: moment().format('YYYY-MM-DD'),
      });
    } else {

      if (!moment(this.state.day).isValid()) {
        alert('Not valid date');
        this.setState({
          day: moment().format('YYYY-MM-DD'),
        });

      } else {
        axios.post('http://localhost:4000/api/vacationDay', {day: this.state.day})
          .then(res => {
            alert('Done');
            this.props.updateData(res.data);
            this.setState({
              day: this.state.day,
            });
          }).catch(err => {

          if (err.response) {
            alert( err.response.data.message);
          } else {
            alert( err.message);
          }
          this.setState({
            day: this.state.day,

          })
        })
      }
    }

  }


  render() {
    return (
      <Container  className={style['VacationDayFormContainer']} >
        < input type="date"
                name="day"
                value={this.state.day}
                onChange={this.onChange}
                min={moment().add(1, 'days').format('YYYY-MM-DD')}
                className={style['VacationDayFormInput']}
        />
        <Button positive onClick={this.onSubmit}>Add vacation day</Button>
      </Container>
    )
  }
}

export default VacationDayForm;