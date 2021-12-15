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
