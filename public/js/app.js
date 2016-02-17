window.$ = require('jquery');
window.Api = require('./zillow/api');

Api.initialize($, 'zillow.com/api/v1');

Api.fetchComps(Api.endpoints.comps, Api.apiKey, 14671441, 25).done(function(resp){
	var x2js = new X2JS();
	window.$scope.comps = x2js.xml_str2json(resp).comps.response.properties;
	$scope.$apply();
});

