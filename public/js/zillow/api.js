

// returning a module
var Api = {};
// module.exports = Api;
Api.apiKey = 'X1-ZWz1f5yx3rj1fv_6sext';
Api.endpoints = {
	comps: 'http://www.zillow.com/webservice/GetComps.htm'
};


Api.fetchComps = function(endpoint, apiKey, zpid, count){
	// http://www.zillow.com/webservice/GetComps.htm?zws-id=X1-ZWz1f5yx3rj1fv_6sext&zpid=14671441&count=5
	var url = endpoint + '?zws-id=' + Api.apiKey + '&zpid=' + zpid + '&count=' + count + '&output=json';
	return $.ajax({
		url: 'http://localhost:5000/api/comps',
		type: 'GET',
		data: {
			url: url
		}
	});
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