let Holidays = require("date-holidays");
let hd = new Holidays("VN");
const listHoliday = hd.getHolidays(2024);
const lunarNewYear = listHoliday.find((item) => item.name === "Tết Nguyên Đán");
console.log(lunarNewYear.date);

function countDownDay(day) {
  let today = Date.now();
  let inputDay = new Date(day);
  let timeDiff = inputDay.getTime() - today;
  console.log(timeDiff);
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}

console.log(countDownDay(lunarNewYear.date));
