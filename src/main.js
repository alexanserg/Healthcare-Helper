import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#weatherLocation').click(function() {
   let firstName = $('#firstName').val();
   let lastName = $('#lastName').val();
   let symptom = $('#symptom').val();

   let promise = // code moved to _weather-service.js_

   promise.then(function(response) {
     let body = JSON.parse(response);
     $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
     $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
   }, function(error) {
     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
   });
 });

});
