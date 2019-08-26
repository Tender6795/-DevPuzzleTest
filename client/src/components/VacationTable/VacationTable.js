import React, {Component} from 'react';
import moment from 'moment';

import {Table} from 'semantic-ui-react'


class VacationTable extends Component {


  constructor(props) {
    super(props);
    this.state = {
      vacationDayCountAll: 0,
      vacationDayCountFree: 0,
      vacationDays: [],
    };
    this.monthNames = [];
    this.month = {};
  }

  refresh=()=>{
    this.monthNames = [];
    this.month = {};
  };

  loadMonth = () => {
    console.log('loadMonth');
    this.state.vacationDays.map(day => {
      this.month[moment(day.day).format("MMMM")].push(moment(day.day).format('DD'));
    });
    console.dir(this.month);
    console.dir( this.state.vacationDays);
  };

  loadMonthNames = () => {
    console.log('loadMonthNames');
    this.refresh();
    for (let i = 0; i < 12; i++) {
      this.monthNames.push((moment([1995, i, 1]).format("MMMM")));
      this.month[moment([1995, i, 1]).format("MMMM")]=[];
    }
      this.loadMonth();
  };




  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps) {
      this.setState({
        vacationDayCountAll: nextProps.vacationDayCountAll,
        vacationDayCountFree: nextProps.vacationDayCountFree,
        vacationDays: nextProps.vacationDays
      });
      this.render();
    }
  }


  render() {
    this.loadMonthNames();

    let months = this.monthNames.map(month => (
      <Table.HeaderCell key={month}>{month}</Table.HeaderCell>
    ));

    let vacation=this.monthNames.map(month=>(
      <Table.Cell key={month}>{this.month[month].sort().join()}</Table.Cell>
    ));



    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Entitlement/DaysRemaining</Table.HeaderCell>
              {months}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>
              {vacation}

            </Table.Row>
          </Table.Body>


        </Table>
      </div>
    )
  }

}

export default VacationTable;