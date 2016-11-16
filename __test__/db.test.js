const db = require('../server/db');

describe('the database', () => {
  it('finds all posts', () => {
    return db.find()
      .then((data) => {
        expect(data.length).toEqual(27);
      });
  });

  it('finds by id', () => {
    return db.byId(37343)
      .then((data) => {
        expect(data.site_ID).toEqual(3584907);
      });
  });

  it('finds by Movie category', () => {
    return db.find({"category": "Movies"})
      .then((data) => {
        expect(data.length).toBeGreaterThanOrEqual(1);
      });
  });

  it('finds by Music category', () => {
    return db.find({"category": "Music"})
      .then((data) => {
        expect(data.length).toBeGreaterThanOrEqual(1);
      });
  });

  it('finds by latest', () => {
    return db.find({ "latest": true })
      .then((data) => {
        expect(data.length).toEqual(6);
      });
  });
});

