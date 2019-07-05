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
     $('.doctorInfo').html(`${body.data.profile.first_name} <br> ${body.data.profile.last_name} <br> ${body.data.profile.first_name} ${body.data.visit_address.city}${body.data.visit_address.street1}${body.data.visit_address.street2}${body.data.visit_address.zip}<br> ${body.data.phones[0].number} ${body.data.visit_address.city} `);
     ;
   }, function(error) {
     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
   });
 });

});
