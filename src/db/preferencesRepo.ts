import { table } from './client';

export interface PreferencesRow {
  customerId: string;
  emailUpdates: boolean;
  language: string;
}

const LANGUAGES = ['en', 'fr', 'de'];

export function readPreferences(customerId: string): PreferencesRow {
  const row = table('preferences').get(customerId) as PreferencesRow | undefined;
  return row ?? { customerId, emailUpdates: true, language: 'en' };
}

export function writePreferences(row: PreferencesRow): PreferencesRow {
  if (!row.customerId) throw new Error('customerId is required');
  if (!LANGUAGES.includes(row.language)) throw new Error('unknown language');
  table('preferences').set(row.customerId, { ...row });
  return row;
}
