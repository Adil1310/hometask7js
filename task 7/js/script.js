let hour = prompt("Enter hour");
let minutes = prompt("Enter minutes");
let seconds = prompt("Enter minutes seconds")


function myFunc(hour, minutes, seconds) {
  let result = [hour, minutes, seconds];
  let clock = result.join(':');
  return clock;
}
 
console.log(myFunc(hour, minutes, seconds));