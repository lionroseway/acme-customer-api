import { json, type Request, type Response } from '../http';
import { savePreferences } from '../services/preferencesService';

/** PUT /customers/:id/preferences */
export function putPreferences(req: Request): Response {
  const row = savePreferences(req.params.id, req.body);
  return json(200, row);
}
