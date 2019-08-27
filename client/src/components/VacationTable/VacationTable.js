import React, {Component} from 'react';
import moment from 'moment';

import {Table} from 'semantic-ui-react';
import style from './VacationTable.module.css';


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



  loadMonthNames = () => {
    this.refresh();
    for (let i = 0; i < 12; i++) {
      this.monthNames.push((moment([1995, i, 1]).format("MMMM")));//все названия месяцев
      this.month[moment([1995, i, 1]).format("MMMM")]=[];//создал объект где ключ название месяцев ,азначение пустой масив
    }
      this.loadMonth();
  };

  loadMonth = () => {
    this.state.vacationDays.map(day => {
      this.month[moment(day.day).format("MMMM")].push(moment(day.day).format('DD')); //заполнение массива дней в каждом месяце
    });
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
      <Table.HeaderCell className={style['VacationTableHeaderCell']} key={month} >
        {month}
      </Table.HeaderCell>
    ));

    let vacation=this.monthNames.map(month=>(
      <Table.Cell className={style['VacationTableCell']} key={month}  >
        {this.month[month].sort().join(',\n')}
      </Table.Cell>
    ));



    return (
      <div>
        <Table celled className={style['VacationTable']}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className={style['VacationTableHeaderCell']}>Entitlement/DaysRemaining</Table.HeaderCell>
              {months}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell className={style['VacationTableCell']}>{this.state.vacationDayCountFree}/{this.state.vacationDayCountAll}</Table.Cell>
              {vacation}
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }

}

export default VacationTable;