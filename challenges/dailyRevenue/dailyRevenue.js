function getDailyRevenue(transactions) {

  let results = {};

  transactions.forEach(line => {
    const date = line.timestamp;
    const keydate = new Date(date).toUTCString().split(',').join('').substring(0, 15);
    const keyarr = keydate.split(' ');
    const key = `${keyarr[0]} ${keyarr[2]} ${keyarr[1]} ${keyarr[3]}`;
    const val = line.price;
    results[key] ? results[key] += val : results[key] = val;
  });

  return results;

}

module.exports = {
  getDailyRevenue
};