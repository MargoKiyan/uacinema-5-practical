import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { message } from './index.js';

describe('Hello World Application', () => {
  describe('Message Verification', () => {
    it('should return correct hello world message', () => {
      assert.strictEqual(message, 'Hello World from CI/CD Pipeline!');
    });

    it('should have non-empty message', () => {
      assert.strictEqual(typeof message, 'string');
      assert.strictEqual(message.length > 0, true);
    });
  });
});

