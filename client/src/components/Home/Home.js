import React, {Component} from 'react';
import axios from 'axios';

import VacationDayForm from '../VacationDayForm';
import VacationTable from '../VacationTable';

class Home extends Component {
  constructor(props) {
    super(props);
    this.loadData();
    this.state = {
      vacationDayCountAll: 30,
      vacationDayCountFree: 30,
      vacationDays: []
    };


  }

  loadData() {
    axios.get('http://localhost:4000/api/vacationDay').then(res => {
      if (res.data) {

        this.setState({
          vacationDayCountAll:this.state.vacationDayCountAll,
          vacationDays: res.data,
          vacationDayCountFree: this.state.vacationDayCountFree - res.data.length,
        })
      }
    })


  }


  updateData=(vacationDay) =>{

    this.setState({
      vacationDayCountAll:this.state.vacationDayCountAll,
      vacationDayCountFree: this.state.vacationDayCountFree - 1,
      vacationDays: [...this.state.vacationDays, vacationDay],
    });

  };

  render() {

    return (
      <div>
        <VacationDayForm vacationDayCountFree={this.state.vacationDayCountFree}
                         updateData={this.updateData}/>
        <VacationTable vacationDayCountAll={this.state.vacationDayCountAll}
                       vacationDayCountFree={this.state.vacationDayCountFree}
                       vacationDays={this.state.vacationDays}/>
      </div>
    )
  }

}

export default Home;