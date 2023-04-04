function getCurrentDay() {
  let day = new Date();
  let month = day.getMonth() + 1;
  let date = day.getDate();
  let year = day.getFullYear();
  console.log(`${month}-${date}-${year}`);
  console.log(`${month}/${date}/${year}`);
  console.log(`${date}-${month}-${year}`);
  console.log(`${date}/${month}/${year}`);
}

getCurrentDay();
