import { readPreferences, writePreferences, type PreferencesRow } from '../db/preferencesRepo';
import { customerExists } from './customerService';

export type PreferencesChange = Partial<Omit<PreferencesRow, 'customerId'>>;

export function getPreferences(customerId: string): PreferencesRow {
  return readPreferences(customerId);
}

export function savePreferences(customerId: string, change: PreferencesChange): PreferencesRow {
  if (!customerExists(customerId)) throw new Error('no such customer');
  if (change.language !== undefined && change.language.length !== 2) throw new Error('language is a two-letter code');
  const current = readPreferences(customerId);
  return writePreferences({ ...current, ...change });
}
