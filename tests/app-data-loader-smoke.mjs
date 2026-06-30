import assert from 'node:assert/strict';

import { loadAppData } from '../src/appDataLoader.js';

let profileEnsured = false;
const capturedErrors = [];

const repository = {
  async loadAll() {
    return {
      data: {
        clients: [{ id: 'client-1' }],
        entries: []
      },
      errors: [
        { table: 'tax_payments', error: new Error('secondary table failed') }
      ]
    };
  }
};

const result = await loadAppData({
  repository,
  ensureUserProfile: async () => {
    profileEnsured = true;
  },
  tableError: (table, error) => {
    capturedErrors.push({ table, message: error.message });
  }
});

assert.equal(profileEnsured, true);
assert.deepEqual(result.data.clients, [{ id: 'client-1' }]);
assert.equal(result.errors.length, 1);
assert.deepEqual(capturedErrors, [{ table: 'tax_payments', message: 'secondary table failed' }]);

await assert.rejects(() => loadAppData({}), /Repository with loadAll/);

console.log('App data loader smoke tests passed.');
