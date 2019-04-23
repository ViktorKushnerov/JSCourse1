const { describe, it } = require('mocha');
const logger = require('../util/log.util')

describe('Hello World TestSuite', () => {
  it('should write "Hello World"', () => {
      logger.info('Hello World');
  });
});