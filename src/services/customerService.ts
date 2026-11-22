import { findCustomer, type CustomerRow } from '../db/customersRepo';

export function customerById(id: string): CustomerRow | undefined {
  return findCustomer(id);
}

export function customerExists(id: string): boolean {
  return findCustomer(id) !== undefined;
}
