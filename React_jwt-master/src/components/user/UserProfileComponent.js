import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
const UserProfileComponent = () => {

    // disable past dates
  const yesterday = moment().subtract(1, 'day');
  const disablePastDt = current => {
    return current.isAfter(yesterday);
  };
 
  // disable future dates
  const today = moment();
  const disableFutureDt = current => {
    return current.isBefore(today)
  }
 
  return (
    <div className="App">
      <h2>Disable dates in react-datetime - CodeCheef</h2>
 
      <p className="title">Disable past dates:</p>
      <DatePicker
        timeFormat={false}
        isValidDate={disablePastDt}
      />
 
      <p className="title">Disable future dates:</p>
      <DatePicker
        timeFormat={false}
        isValidDate={disableFutureDt}
      />
    </div>
  );
}

export default UserProfileComponent