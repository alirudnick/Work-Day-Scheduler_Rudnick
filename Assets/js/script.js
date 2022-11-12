
//global variables
  var currentDay = document.getElementById("currentDay");
  var day = dayjs().format();
  var saveBtn = document.querySelectorAll(".saveBtn");
  console.log(saveBtn);


  currentDay.textContent = day;
for (i = 0; i < saveBtn.length; i++) {
  saveBtn[i].addEventListener("click", function() {
    var text = this.previousElementSibling.value
    console.log(text);
    var hour = this.parentElement.id 
    localStorage.setItem(hour, text)
  })
  

}
  


 