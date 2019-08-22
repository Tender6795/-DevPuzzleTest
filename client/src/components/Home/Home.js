import React, {Component} from 'react';
import axios from 'axios';

import VacationDayForm from '../VacationDayForm';
import VacationTable from '../VacationTable';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vacationDayCountAll: 30,
      vacationDayCountFree: 30,
      vacationDays: []
    };

    this.loadData();
  }

   loadData() {
axios.get('http://localhost:4000/api/vacationDay').then(res=>{
  if (res.data) {
    this.setState({
      vacationDays: res.data,
      vacationDayCountFree: this.state.vacationDayCountFree - res.data.length,
    })
  }
})


  }


  updateData(vacationDay) {
    this.setState({
      vacationDayCountFree: this.state.vacationDayCountFree - 1,
      vacationDays: [...this.state.vacationDays, vacationDay],
    });
  }

  render() {
    console.log('++++Render+++++');
    console.dir(this.state.vacationDays);// Сдесь уже есть
    console.log('++++Render+++++');
    return (
      <div>
        <VacationDayForm vacationDayCountFree={this.state.vacationDayCountFree}
                         updateData={this.updateData}
        />
        <VacationTable vacationDayCountAll={this.state.vacationDayCountAll}
                       vacationDayCountFree={this.state.vacationDayCountFree}
                       vacationDays={this.state.vacationDays}/>
      </div>
    )
  }

}

export default Home;