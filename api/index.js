const pay = require('./pay');

const api_routes = [pay];

module.exports = options => api_routes.forEach(api_route => api_route(options));
