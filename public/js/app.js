window.$ = require('jquery');
window.Api = require('./zillow/api');

Api.initialize($, 'zillow.com/api/v1');

Api.addressLookup(Api.endpoints.getsearchresults, Api.apiKey).then(function(){
	Api.fetchComps(Api.endpoints.comps, Api.apiKey, zpid, 25);
});


// Api.fetchComps(Api.endpoints.comps, Api.apiKey, result, 25).done(function(resp){
// 	var x2js = new X2JS();
// 	window.$scope.comps = x2js.xml_str2json(resp).comps.response.properties;
// 	$scope.$apply();
// });
