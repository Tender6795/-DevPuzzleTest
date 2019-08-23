import React, {Component} from 'react';

class VacationTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vacationDayCountAll: 0,
      vacationDayCountFree: 0,
      vacationDays: []
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.dir(nextProps);
    if (nextProps) {
      this.setState({
        vacationDayCountAll: nextProps.vacationDayCountAll,
        vacationDayCountFree: nextProps.vacationDayCountFree,
        vacationDays: [nextProps.vacationDays]
      })
    }
  }


  render() {
    console.log('render Table');
    console.dir(this.props);
    return (
      <div>
        {/*<p>{this.props.vacationDayCountAll}</p>*/}
        {/*<p>{this.props.vacationDayCountFree}</p>*/}

        <p>{this.state.vacationDayCountAll}</p>
        <p>{this.state.vacationDayCountFree}</p>
      </div>
    )
  }

}

export default VacationTable;