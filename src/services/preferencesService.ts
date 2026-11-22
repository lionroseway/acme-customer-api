import { readPreferences, writePreferences, type PreferencesRow } from '../db/preferencesRepo';
import { customerExists } from './customerService';

export type PreferencesChange = Partial<Omit<PreferencesRow, 'customerId'>>;

export function getPreferences(customerId: string): PreferencesRow {
  return readPreferences(customerId);
}

export function savePreferences(customerId: string, change: PreferencesChange): PreferencesRow {
  if (!customerExists(customerId)) throw new Error('no such customer');
  const current = readPreferences(customerId);
  return writePreferences({ ...current, ...change });
}
