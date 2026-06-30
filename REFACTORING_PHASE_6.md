# TOTIME — Refactoring Phase 6

## Obiettivo

Rendere più controllati versione app, cache e comportamento PWA.

## Perché serve

TOTIME è usata anche come PWA. Dopo un deploy può capitare che il browser o l'icona installata mostrino una versione vecchia.

## Sequenza proposta

### Fase 6A

Piano e criteri.

### Fase 6B

Centralizzare numero versione app e nome cache.

### Fase 6C

Verificare lista asset da mettere in cache.

### Fase 6D

Migliorare istruzioni post-deploy e rollback.

## Regole

- Non cambiare logica applicativa insieme a cache PWA.
- Aggiornare cache solo quando cambiano file runtime.
- Testare sempre su browser e, quando possibile, anche su iPhone.
- Mantenere una procedura semplice per forzare reload versione.

## Test minimi

```bash
npm test
```

Verifica manuale:

- deploy Netlify;
- apertura da browser;
- apertura con query string versione;
- rimozione e reinstallazione PWA se necessario;
- login;
- caricamento dati.

## Output finale atteso

Versioning più chiaro e meno problemi di vecchia app in cache dopo un rilascio.
