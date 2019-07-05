import './styles.css';
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
    let promise = healthCare.getDoctor();
    console.log('hi');

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.doctorInfo').html(`${body.data.profile.first_name} <br> ${body.data.profile.last_name} <br> ${body.data.profile.first_name} ${body.data.visit_address.city}${body.data.visit_address.street1}${body.data.visit_address.street2}${body.data.visit_address.zip}<br> ${body.data.phones[0].number} ${body.data.visit_address.city} `)
      ;
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
