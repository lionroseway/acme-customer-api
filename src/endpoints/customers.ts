import { json, type Request, type Response } from '../http';
import { customerById } from '../services/customerService';

/** GET /customers/:id */
export function getCustomer(req: Request): Response {
  const customer = customerById(req.params.id);
  return customer ? json(200, customer) : json(404, { error: 'no such customer' });
}
