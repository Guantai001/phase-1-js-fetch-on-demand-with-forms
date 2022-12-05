"use strict";

var init = function init() {
  var inputForm = document.getElementById('form');
  inputForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.querySelector('input#searchByID');
    console.log(input.value);
    fetch('http://localhost:3000/movies').then(function (response) {
      return response.json();
    }).then(function (data) {
      var title = document.querySelector('section#movieDetails h4');
      var summary = document.querySelector('section#movieDetails p');
      title.innerText = data.title;
      summary.innerText = data.summary;
    });
  });
};

document.addEventListener('DOMContentLoaded', init);