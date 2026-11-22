export interface Request {
  params: Record<string, string>;
  body: Record<string, unknown>;
}

export interface Response {
  status: number;
  body: unknown;
}

export const json = (status: number, body: unknown): Response => ({ status, body });
