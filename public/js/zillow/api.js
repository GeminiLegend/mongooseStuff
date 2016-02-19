

// returning a module
var Api = {};
// module.exports = Api;
Api.apiKey = 'X1-ZWz1f5yx3rj1fv_6sext';
Api.endpoints = {
	comps: 'http://www.zillow.com/webservice/GetComps.htm',
	getsearchresults: 'http://www.zillow.com/webservice/GetSearchResults.htm'
};
Api.address = $('#addressinput').val();
Api.zipcode = $('#zipcodeinput').val();

// http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA
// s 	= encodeURI('9770 hillside dr')
// csz = encodeURI('Roswell GA');

// http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1f5yx3rj1fv_6sext&address=9770%20hillside%20dr&citystatezip=Roswell%20GA

// address = 'http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1f5yx3rj1fv_6sext&address='+ encodeURI('9770 hillside dr') + '&citystatezip=' + encodeURI('Roswell GA')

Api.addressLookup = function(endpoint, apiKey) {
	var address = Api.address;
	var zipcode = Api.zipcode;
	var url = endpoint + '?zws-id=' + Api.apiKey + '&address=' + address + '&citystatezip=' + zipcode;
	return $.ajax({
		url: 'http://localhost:5000/api/comps',
		type: 'GET',
		data: {
			url: url,
		}
	})
};

Api.xml2json = function(resp){
	var x2js = new X2JS();
	window.$scope.xml2json = x2js.xml_str2json(resp);
	window.result = window.$scope.xml2json;
	// $scope.$apply();
};

Api.fetchComps = function(endpoint, apiKey, zpid, count){
	// http://www.zillow.com/webservice/GetComps.htm?zws-id=X1-ZWz1f5yx3rj1fv_6sext&zpid=14671441&count=5
	var url = endpoint + '?zws-id=' + Api.apiKey + '&zpid=' + zpid + '&count=' + count;
	return $.ajax({
		url: 'http://localhost:5000/api/comps',
		type: 'GET',
		data: {
			url: url
		}
	})
};

Api.initialize = function($, baseUrl) {
	// console.log('hi');	

	return {
		addressEndpoint: baseUrl + '/address',
		getApiKey: function(){
			return Api.apiKey;
		}
	};
};

// exporting the initialize method
module.exports = Api;