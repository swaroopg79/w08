(function ($) {

  $('#btnLoadText').click(function () { $("#showResult").load("show.txt"); });
  $('#btnAjax').click(function () { callRestAPI() });

  // Perform an asynchronous HTTP (Ajax) API request.
  function callRestAPI() {
    var root = 'https://jsonplaceholder.typicode.com';
    var pN=Math.round((Math.random()*100)+1)
    $.ajax({
    
      url: root + '/posts/'+ pN,
      method: 'GET'
    }).then(function (response) {
      console.log(response);
      $('#showResult').html(response.body);
    });
  }
})(jQuery);