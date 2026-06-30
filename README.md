# TOTIME Web App / PWA v1.1.1

Release rigenerata dopo migrazione SQL v1.1 dei parametri di proiezione annuale.

## Novità rispetto alla v1.1
- Proiezione anno collegata ai nuovi campi configurabili in `tax_settings`.
- Data avvio attività letta da database (`activity_start_date`).
- Mesi esclusi dalla proiezione configurabili.
- Inclusione/esclusione del mese corrente configurabile.
- Fattori scenario prudente/ottimistico configurabili.
- Soglie rischio configurabili.
- Cache/service worker aggiornato a `totime-v111`.

## Nota deploy
Caricare su GitHub i file estratti, non lo ZIP. Se la PWA mostra una vecchia versione, aprire il link con `?v=111` o reinstallare la PWA dalla Home.
