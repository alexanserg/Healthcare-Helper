export class HealthCare {
  getDoctor(first_name, last_name, symptom) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=45.5155%2C%20-122.6793&skip=0&limit=10&user_key=2cdda81a44d71b558f9b89e9fddc19a0';
`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
