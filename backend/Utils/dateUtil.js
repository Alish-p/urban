const addMonths = (date, months) => {
  let d = date.getDate();
  date.setMonth(date.getMonth() + +months);
  if (date.getDate() != d) {
    date.setDate(0);
  }

  // 25th may ends on 24th june
  date.setDate(date.getDate() - 1);

  return date;
};

module.exports = { addMonths };
