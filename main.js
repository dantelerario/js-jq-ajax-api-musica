$(document).ready(function() {
	var cdList = $('.cds-container')
  var cdArray = [];
  // handlebars
  var source = $('#template').html();
  var template = Handlebars.compile(source);
  // loading cds in html
  for (i = 0; i < 10; i++) {
    $.ajax({
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data) {
        cdArray.push


      },
      error: function() {
        console.log('ERROR');
      },
    })
  }

});
