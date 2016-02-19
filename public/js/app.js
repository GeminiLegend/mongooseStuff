window.$ = require('jquery');
window.Api = require('./zillow/api');

Api.initialize($, 'zillow.com/api/v1');

$('#zpidlookup').on('click', submitZpidLookup);

function submitZpidLookup(evt){
	evt.preventDefault();
	
	$('.houselist').find('li').remove();

	var address    = $('#address').val();
	var citystate  = $('#citystate').val();
	var zip 	   = $('#zip').val();
	
	Api.addressLookup(Api.endpoints.getsearchresults, Api.apiKey, address, zip).done(function(resp){
		var zpid_response 	= Api.xml2json(resp).searchresults.response.results.result;
		var zpid 			= zpid_response.zpid;

		Api.fetchComps(Api.endpoints.comps, Api.apiKey, zpid, 25).done(function(resp){
			var json 			= Api.xml2json(resp);
			var compsResp 		= json.comps.response.properties;

			window.$scope.compsdata = compsResp.comparables.comp;
			window.$scope.$apply();
		});
	});

}
