import {Dob} from './dob';
// import './styles.css';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#userInput').submit(function(event) {
    event.preventDefault();
    let year = $('#userInput').find('input[name="year"]').val();
    let month = $('#userInput').find('input[name="month"]').val();
    let day = $('#userInput').find('input[name="day"]').val();
    let hour = $('#userInput').find('input[name="hours"]').val();
    let minute = $('#userInput').find('input[name="minutes"]').val();
    let second = $('#userInput').find('input[name="seconds"]').val();
    console.log(year + month + day);
    let dob = new Dob(parseInt(year) + ", " + parseInt(month) + ", " + parseInt(day) + ", " + parseInt(hour) + ", " + parseInt(minute + 0) + ", " + parseInt(second + 0));
    console.log(dob);
    let age = dob.birthday();
    console.log(age);


  });
});
