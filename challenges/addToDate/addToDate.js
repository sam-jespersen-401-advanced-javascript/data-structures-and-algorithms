function addToDate(date, diff) {

  if(typeof date !== 'object') {
    throw new Error('Please provide a valid date object');
  }

  const dateObj = {
    s: date.getSeconds(),
    m: date.getMinutes(),
    h: date.getHours(),
    d: date.getDate(),
    M: date.getMonth(),
    y: date.getFullYear()
  };

  const index = diff[diff.length - 1];
  const mod = Number(diff.slice(0, -1));
  if(index === 'w') {
    dateObj.d += (mod * 7);
  } else {
    dateObj[index] += mod;
  }

  return new Date(dateObj.y, dateObj.M, dateObj.d, dateObj.h, dateObj.m, dateObj.s);

}


module.exports = {
  addToDate
};