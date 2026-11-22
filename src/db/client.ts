export type Row = Record<string, unknown>;

const tables = new Map<string, Map<string, Row>>();

/** One table, by name. A stand-in for the database. */
export function table(name: string): Map<string, Row> {
  let rows = tables.get(name);
  if (!rows) {
    rows = new Map();
    tables.set(name, rows);
  }
  return rows;
}
