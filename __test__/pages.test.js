const http = require('http');

describe('Pages load', () => {
  it('Successfully gets the latest page', () => {
    http.get({
      hostname: 'localhost',
      port: 3000,
      path: '/news/latest',
      agent: false  // create a new agent just for this one request
    }, (res) => {
      // Do stuff with response
      expect(res.statusCode).toEqual(200);
    });
  });
});
