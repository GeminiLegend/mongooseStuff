window.$ = require('jquery');
window.Api = require('./zillow/api');

Api.initialize($, 'zillow.com/api/v1');

// Api.addressLookup(Api.endpoints.getsearchresults, Api.apiKey).then(function(){
	// Api.fetchComps(Api.endpoints.comps, Api.apiKey, zpid, 25);
// });

Api.addressLookup(Api.endpoints.getsearchresults, Api.apiKey).done(function(resp){
	Api.xml2json(resp);
	window.zpid = result.searchresults.response.results.result.zpid;
	Api.fetchComps(Api.endpoints.comps, Api.apiKey, zpid, 25).done(function(resp){
		Api.xml2json(resp);
		window.compsdata = result.comps.response.properties.comparables;
	});
});


// Api.fetchComps(Api.endpoints.comps, Api.apiKey, result, 25).done(function(resp){
// 	var x2js = new X2JS();
// 	window.$scope.comps = x2js.xml_str2json(resp).comps.response.properties;
// 	$scope.$apply();
// });
