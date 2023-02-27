//this code displays the current day at the top of the page
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

//making variable to use to check current time for time blocks later
var time = dayjs();
var currentHour = dayjs().hour()

//this code adds a click event to the save buttons
var saveBtnClass = $('.saveBtn');

$('.saveBtn').on('click', function() {
  
  var text = $(this).siblings("textarea").val()
  var timeBlock = $(this).parent().attr("id")
  localStorage.setItem(timeBlock, text);

})





//this for loop sets the classes of present/past/future as compared with the current time
for (let i = 9; i < 18; i++) {
   if (currentHour === i) {
    $('#hour-'+ i).children("textarea").addClass("present")
   }
   if (currentHour > i) {
    $('#hour-'+ i).children("textarea").addClass("past")
   }
   if (currentHour < i) {
    $('#hour-'+ i).children("textarea").addClass("future")
   }
   var text = localStorage.getItem('hour-'+ i)
   $('#hour-'+ i).children("textarea").val(text)
}













// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



function userInput() {
  var input = localStorage.getItem("")
}