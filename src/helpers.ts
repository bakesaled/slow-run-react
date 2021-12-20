export const convertSecondsToString = (secNum: number) => {
  const hourNum = Math.floor(secNum / 3600);
  const minNum = Math.floor((secNum - hourNum * 3600) / 60);
  secNum = secNum - hourNum * 3600 - minNum * 60;

  let hours = hourNum.toString();
  let minutes = minNum.toString();
  let seconds = secNum.toString();
  if (hourNum < 10) {
    hours = '0' + hours;
  }
  if (minNum < 10) {
    minutes = '0' + minutes;
  }
  if (secNum < 10) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
};

export const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minStr = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minStr + ' ' + ampm;
  return strTime;
};

export const calculatePaceString = (dist: number, secs: number) => {
  const calculatedPace = Math.floor(secs / dist);
  const paceMins = Math.floor(calculatedPace / 60);
  const paceSecs = calculatedPace - paceMins * 60;

  let minStr = paceMins.toString();
  let secStr = paceSecs.toString();
  if (paceMins < 10) {
    minStr = '0' + paceMins;
  }
  if (paceSecs < 10) {
    secStr = '0' + paceSecs;
  }
  const pace = minStr + ':' + secStr;
  return pace;
};

export const localizeDateFromServer = (
  dateFromServer: Date,
  serverOffset: number
) => {
  const serverOffsetMillis = 1000 * serverOffset;
  const localOffset = new Date().getTimezoneOffset(); // in minutes
  const localOffsetMillis = 60 * 1000 * localOffset;
  const localStartDate = new Date(
    dateFromServer.getTime() + localOffsetMillis + serverOffsetMillis
  );
  return localStartDate;
};
