import { json, type Response } from '../http';

/** GET /health */
export function health(): Response {
  return json(200, { ok: true });
}
