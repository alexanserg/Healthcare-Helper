
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HealthCare} from './healthcare.js'

$(document).ready(function(){
  $('#get_doctors').click(function() {
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let symptom = $('#symptom').val();
    let healthCare = new HealthCare();
    console.log(first_name);
    console.log(last_name);
    console.log(symptom);
    let promise = healthCare.getDoctor(first_name,last_name,symptom);

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log('hi')
      $('.doctorInfo').text(body.data);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});

//
// <br> ${body.data.profile.last_name} <br> ${body.data.profile.first_name} ${body.data.practices.visit_address.city}${body.data.practices.visit_address.street1}${body.data.practices.visit_address.street2}${body.data.practices.visit_address.zip}<br> ${body.data.practices.phones[0].number} ${body.data.practices.visit_address.city}
