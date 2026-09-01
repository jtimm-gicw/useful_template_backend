'use strict';

/*
========================================================
JEST + SUPERTEST TEST TEMPLATE
========================================================
*/

const request = require('supertest');

const app = require('../src/server');


/*
========================================================
TEST GROUP
========================================================
*/

describe('API Tests', () => {

  /*
  ======================================================
  GET TEST
  ======================================================
  */

  test('GET route works', async () => {

    // TEST
    const test = await request(app)
      .get('/api/v1/REPLACE_ME');


    // EXPECTED
    const expected = 200;

    expect(test.status).toBe(expected);
  });


  /*
  ======================================================
  POST TEST
  ======================================================
  */

  test('POST route works', async () => {

    // TEST
    const test = await request(app)
      .post('/api/v1/REPLACE_ME')
      .send({
        name: 'REPLACE_ME',
      });


    // EXPECTED
    const expected = 201;

    expect(test.status).toBe(expected);
  });


  /*
  ======================================================
  PUT TEST
  ======================================================
  */

  test('PUT route works', async () => {

    // TEST
    const test = await request(app)
      .put('/api/v1/REPLACE_ME/1')
      .send({
        name: 'UPDATED VALUE',
      });


    // EXPECTED
    const expected = 200;

    expect(test.status).toBe(expected);
  });


  /*
  ======================================================
  DELETE TEST
  ======================================================
  */

  test('DELETE route works', async () => {

    // TEST
    const test = await request(app)
      .delete('/api/v1/REPLACE_ME/1');


    // EXPECTED
    const expected = 200;

    expect(test.status).toBe(expected);
  });

});
