// // DOM
// var body = document.querySelector("body");
// var timeDisplay = document.querySelector(".catalogue-title");
// var modeDisplay = document.querySelector(".container-fluid");
//
// function updateClock() {
//   // Get date
//   var date = new Date();
//
//   // Get hours and minutes
//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//
//   if (minutes <= 9) {
//     minutes = "0" + minutes;
//   }
//
//   var time = hours + ":" + minutes;
// }
//
// // Update every second
// setInterval(updateClock, 1000);
// setInterval(check, 1000);
//
// // Check for date or night
// function check() {
//
//   // Get date
//   var date = new Date();
//   // Get hours
//   var hours = date.getHours();
//
//   if (hours <= 10 && hours <= 20) {
//     // Day Time
//     console.log("Day time");
//
//
//     var elements = [body, timeDisplay, modeDisplay];
//
//     elements.forEach(function(element) {
//       element.classList.remove("night");
//       element.classList.add("day");
//     });
//
//   } else {
//     // Night Time
//     console.log("Night time");
//
//
//     var elements = [body, timeDisplay, modeDisplay];
//
//     elements.forEach(function(element) {
//       element.classList.remove("day");
//       element.classList.add("night");
//     });
//
//   }
// }
