# TOTIME — Refactoring Phase 2H

## Obiettivo

Preparare una forma dati applicativa unica prima del collegamento operativo di `app.js`.

## Moduli aggiunti

- `src/appDataShape.js`
- `tests/app-data-shape-smoke.mjs`

## Perché serve

Il caricamento dati deve sempre restituire le stesse chiavi applicative.

## Garanzie

- tutte le chiavi principali esistono sempre;
- ogni chiave contiene sempre un array;
- i dati non validi vengono normalizzati a lista vuota;
- il test tecnico entra nel comando `npm test`.

## Cosa non cambia

- `app.js` non viene modificato;
- la UI non cambia;
- il database non cambia;
- il service worker non cambia.

## Prossima fase

Usare questa normalizzazione quando `app.js` riceverà i dati caricati dal repository layer.
