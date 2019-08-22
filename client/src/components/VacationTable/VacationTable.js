import React, {Component} from 'react';

class VacationTable extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <p>{this.props.vacationDayCountAll}</p>
        <p>{this.props.vacationDayCountFree}</p>
      </div>
    )
  }

}

export default VacationTable;