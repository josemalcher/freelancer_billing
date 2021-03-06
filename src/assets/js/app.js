$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})


function activate_element_events() {
	
	console.log('Elements activated');

}


function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
	
    var sURLVariables = sPageURL.split('&');
	
    for (var i = 0; i < sURLVariables.length; i++) {
	
        var sParameterName = sURLVariables[i].split('=');
		
        if (sParameterName[0] == sParam){
		
            return sParameterName[1];
			
        }
		
    }
	
}   


function strstr(haystack, needle, bool) {
  //  discuss at: http://phpjs.org/functions/strstr/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Onno Marsman
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //   example 1: strstr('Kevin van Zonneveld', 'van');
  //   returns 1: 'van Zonneveld'
  //   example 2: strstr('Kevin van Zonneveld', 'van', true);
  //   returns 2: 'Kevin '
  //   example 3: strstr('name@example.com', '@');
  //   returns 3: '@example.com'
  //   example 4: strstr('name@example.com', '@', true);
  //   returns 4: 'name'

  var pos = 0;

  haystack += '';
  pos = haystack.indexOf(needle);
  if (pos == -1) {
    return false;
  } else {
    if (bool) {
      return haystack.substr(0, pos);
    } else {
      return haystack.slice(pos);
    }
  }
}

$(document).ready(function(){

	$('.select_on_click').click(function(){this.select()});

});
