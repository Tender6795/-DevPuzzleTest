import React, {Component} from 'react';
import VacationDayForm from '../VacationDayForm';
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vacationDayCountAll: 30,
      vacationDayCountFree: 30,
      vacationDays: []
    };

    axios.get('http://localhost:4000/api/vacationDay')
      .then(res => {
        if (res.data) {
          this.setState({
            vacationDays: res.data,
            vacationDayCountFree: this.state.vacationDayCountFree - res.data.length,
          })
          console.dir(this.state.vacationDayCountFree);
          console.dir(this.state.vacationDays);
        }
      });

  }

  updateData(vacationDay) {
    this.setState({
      vacationDayCountFree: this.state.vacationDayCountFree - 1,
      vacationDays: [...this.state.vacationDays, vacationDay],
    });
    console.dir(this.state.vacationDayCountFree);
    console.dir(this.state.vacationDays);
  }

  render() {
    return (
      <VacationDayForm vacationDayCountFree={this.state.vacationDayCountFree}
                       updateData={this.updateData}
      />
    )
  }

}

export default Home;