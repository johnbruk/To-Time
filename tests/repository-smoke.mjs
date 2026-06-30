import assert from 'node:assert/strict';

import { createRepository } from '../src/dataRepository.js';

function makeQuery(table, calls) {
  const query = {
    select(value) {
      calls.push([table, 'select', value]);
      return this;
    },
    order(column, options) {
      calls.push([table, 'order', column, options]);
      return this;
    },
    async then(resolve) {
      resolve({ data: [{ id: `${table}-1` }], error: null });
    }
  };
  return query;
}

const calls = [];
const sb = {
  from(table) {
    calls.push([table, 'from']);
    return makeQuery(table, calls);
  }
};

const repository = createRepository(sb);
assert.equal(repository.tables.length, 14);

const clients = await repository.clients.list();
assert.deepEqual(clients, [{ id: 'clients-1' }]);
assert.ok(calls.some(call => call[0] === 'clients' && call[1] === 'order' && call[2] === 'created_at'));

calls.length = 0;
const timesheet = await repository.timesheet.list();
assert.deepEqual(timesheet, [{ id: 'timesheet_entries-1' }]);
assert.ok(calls.some(call => call[0] === 'timesheet_entries' && call[1] === 'order' && call[2] === 'entry_date'));

console.log('Repository smoke tests passed.');
