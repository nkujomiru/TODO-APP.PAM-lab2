export const getCurrentDate = () => {
  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();

  let dateString = year + "-" + month + "-" + day; //format: dd-mm-yyyy;

  let date = {
    day: day, // day of month (1-31)
    month: month, // month of year (1-12)
    year: year, // year
    dateString: dateString, // date formatted as 'YYYY-MM-DD' string
  };

  return date;
};
