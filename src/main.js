
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
      body.data.forEach(function(doctor) {
        console.log(doctor.practices);
        console.log(doctor.practices[0].accepts_new_patients);
        $('.doctorInfo').append(`<li>${doctor.profile.first_name}</li><li>${doctor.profile.last_name}</li><li>Currently accepting patients: ${doctor.practices[0].accepts_new_patients}</li><li>Practices:${doctor.specialties[0].name}</li><li>Phone: ${doctor.practices[0].phones[0].number}</li><li>Street Address: ${doctor.practices[0].visit_address.street}</li><li>For more info, vist: ${doctor.practices[0].website}</li><br> `)
    })


      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    })
  })
