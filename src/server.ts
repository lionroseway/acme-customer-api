import type { Request, Response } from './http';
import { health } from './endpoints/health';
import { getCustomer } from './endpoints/customers';

type Handler = (req: Request) => Response;

export const routes: Record<string, Handler> = {
  'GET /health': health,
  'GET /customers/:id': getCustomer,
};
