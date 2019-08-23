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
    }
    this.month = {
      January: [],
      February: [],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: [],
    }
  }


  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps) {
      this.setState({
        vacationDayCountAll: nextProps.vacationDayCountAll,
        vacationDayCountFree: nextProps.vacationDayCountFree,
        vacationDays: nextProps.vacationDays
      })
    }
    //this.loadMonth();
  }

  loadMonth=()=> {
    let days = [];
    this.state.vacationDays.map(day => {
      console.log(moment(day.day).month());
      if (moment(day.day).month() === 7) {
        days = [...days ,day.day];
      }
      this.month.August = [...days];
    })


    console.log('==========August==========')
    console.dir(this.month.August)
  }



  render() {
    this.loadMonth();
    // {
    //   let days = [];
    //   this.state.vacationDays.map(day => {
    //     console.log(moment(day.day).month());
    //     if (moment(day.day).month() === 7) {
    //       days = [...days ,day.day];
    //     }
    //     this.month.August = [...days];
    //   })
    // }
    // {
    //   console.log('==========August==========')
    //    console.dir(this.month.August)
    // }

    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Entitlement/DaysRemaining</Table.HeaderCell>
              <Table.HeaderCell>January</Table.HeaderCell>
              <Table.HeaderCell>February</Table.HeaderCell>
              <Table.HeaderCell>March</Table.HeaderCell>
              <Table.HeaderCell>April</Table.HeaderCell>
              <Table.HeaderCell>May</Table.HeaderCell>
              <Table.HeaderCell>June</Table.HeaderCell>
              <Table.HeaderCell>July</Table.HeaderCell>
              <Table.HeaderCell>August</Table.HeaderCell>
              <Table.HeaderCell>September</Table.HeaderCell>
              <Table.HeaderCell>October</Table.HeaderCell>
              <Table.HeaderCell>November</Table.HeaderCell>
              <Table.HeaderCell>December</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>

              {/*...............................................*/}
              {/*moment(day.day).month()*   возращает номер месяца начиная с 0/}
               {/*{console.dir(this.state.vacationDays)}   список всех выходных дней*/}
              {/*...............................................*/}


              {/*<Table.Cell>{*/}
              {/*this.state.vacationDays.map(day => {*/}
              {/*//  console.log('=====month====');*/}
              {/*// console.log(moment(day.day).month());*/}
              {/*})}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
              {/*<Table.Cell>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>*/}
            </Table.Row>
          </Table.Body>


        </Table>
      </div>
    )
  }

}

export default VacationTable;