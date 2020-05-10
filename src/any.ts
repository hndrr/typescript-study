import axios from 'axios';

export {};

let url: string = 'https://swapi.co/api/people/1/';

axios.get(url).then(function (response) {
  // handle success
  console.log(response);
});
