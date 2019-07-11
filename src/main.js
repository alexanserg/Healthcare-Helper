
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
    let promise = healthCare.getDoctor();

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body.data);
      body.data.forEach(function(doctor) {
        $('.doctorInfo').append(`<li>${name}</li>`);
      })
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  })
})
