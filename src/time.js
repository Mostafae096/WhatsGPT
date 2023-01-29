import moment from 'moment';

export default function getTimeInFormat(time) {
    if (time === '') {
      return '';
    }
    const newTime = moment(time).format('hh:mm A');
    return newTime;
  };

//console.log(getTimeInFormat('Sun, 29 Jan 2023 14:38:46 GMT'))