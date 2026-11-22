# Acme customer API

Three layers, one direction:

    src/endpoints/  →  src/services/  →  src/db/

An endpoint reads the request and answers it. A service decides what is
allowed. Only `src/db/` touches the tables.
