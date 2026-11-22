import { json, type Request, type Response } from '../http';
import { writePreferences } from '../db/preferencesRepo';

/** PUT /customers/:id/preferences */
export function putPreferences(req: Request): Response {
  const row = writePreferences({ customerId: req.params.id, ...req.body });
  return json(200, row);
}
