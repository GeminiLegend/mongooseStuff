

// returning a module
var Api = {};
// module.exports = Api;
Api.initialize = function(baseUrl) {
	console.log('hi');
	Api.apiKey = 'some secret key';

	return {
		addressEnpoint: baseUrl + '/address',
		getApiKey: function(){
			return Api.apiKey;
		}
	};
};

// exporting the initialize method
module.exports = Api.initialize('zillow.com/api/v1');