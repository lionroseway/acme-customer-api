import { table } from './client';

export interface CustomerRow {
  id: string;
  name: string;
}

export function findCustomer(id: string): CustomerRow | undefined {
  return table('customers').get(id) as CustomerRow | undefined;
}
