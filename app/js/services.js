angular.module('myAppServices', ['ngResource']).factory('BreakinBadChar', function($resource){
    return $resource("htpp://localhost:3000/api/v1/services/445d1b20-8282-11e5-b53d-4187e5558597/field");
  return $resource(':resourceName.json', {}, {
    query: {method:'GET', params:{resourceName:'breaking_bad_char'}, isArray: true}
  });
});