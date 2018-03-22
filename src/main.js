import {toFarenheit} from './logic.js';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function(){
  main();
});

function main()
{
  $('#btn-submit').click(function(){
      let city = $('#input-city').val();
      $('#input-city').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.weatherKey}`,
        type: `GET`,
        data: {
          format: `json`
        },
        success: function(response){
          let tempFarenheit = toFarenheit(`${response.main.temp}`);
          $(`#show-temp`).text(`The temp in ${city} is ` + tempFarenheit + ' F');
          $(`#show-pressure`).text(`The pressure in ${city} is ${response.main.pressure}`);
          $('#show-humidity').text(`The humidy in ${city} is ${response.main.humidity}%`);

        },
        error: function(){
          $('#errors').text("There was an error with the request.")
        }
      });
    });

}
