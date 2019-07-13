
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HealthCare} from './healthcare.js'

$(document).ready(function(){
  $('#get_doctors').click(function() {
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let symptom = $('#symptom').val();
    console.log(first_name);
    console.log(last_name);
    console.log(symptom);
    let healthCare = new HealthCare();
    let promise = healthCare.getDoctor(first_name, last_name, symptom);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log();
      // body.data.forEach(function(doctor) {
        $('.doctorInfo').html(`<li>${body.data[0].practices[0].name}</li><br><li>${body.data[0].practices[0].visit_address.street}</li><br><li>It is ${body.data[0].practices[0].accepts_new_patients} that this facility is accepting new patients</li><br><li>Phone Number: ${body.data[0].practices[0].phones[0].number}</li><br><li>Please visit ${body.data[0].practices[0].website}</li>`);
      // })
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  })
})
