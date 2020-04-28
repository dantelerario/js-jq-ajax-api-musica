$(document).ready(function() {
	var cdList = $('.cds-container')
  // loading API in array
    $.ajax({
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data) {
        // handlebars
        var source = $('#template').html();
        var template = Handlebars.compile(source);
          for (i = 0; i < data.response.length; i++) {
              var htmlCdList = template(data.response[i]);
              cdList.append(htmlCdList);
          }
      },
      error: function() {
        console.log('ERROR');
      },
    });
  // SELECT
  // var select = $('#genreType');
    // function selectGenre() {
    //   var x = document.getElementById("genreType").value;
    //   alert('CAMBIO GENERE'); //debug
    function selectGenre() {
      alert("hi");
    }
}); // End Document
