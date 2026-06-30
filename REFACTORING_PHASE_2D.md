# TOTIME — Refactoring Phase 2D

## Obiettivo

Preparare il collegamento operativo tra `app.js` e il repository layer con un adapter testabile.

## Moduli aggiunti

```text
src/appDataLoader.js
tests/app-data-loader-smoke.mjs
```

## Scelta prudenziale

In questa PR `app.js` non viene ancora modificato. L'adapter viene introdotto e testato separatamente.

## Prossima PR

La prossima PR potrà:

- importare `createRepository` e `loadAppData` in `app.js`;
- creare il repository sopra il client Supabase esistente;
- sostituire solo il corpo di `fetchAll()`;
- lasciare invariati salvataggi, update e delete.

## Test consigliato

```bash
node tests/app-data-loader-smoke.mjs
```
