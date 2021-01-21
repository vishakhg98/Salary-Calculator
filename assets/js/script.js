function calculate() {
  var empName = form.name.value;
  var empSalary = parseFloat(form.salary.value);
  var years = parseInt(form.years.value);
  var months = parseInt(form.months.value);

  totalSalary = (
    empSalary * (years * 12) +
    empSalary * months
  ).toLocaleString();
  var results = "Total Salary :  " + totalSalary.toLocaleString();
  console.log(results);
  // &#8377; <- Rupees unicode
  document.querySelector(".form__results").innerHTML =
    "Total Salary &emsp;: &emsp; &#8377;" + totalSalary;
}
