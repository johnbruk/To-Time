# TOTIME Web App / PWA v0.7 — Database Edition

Questa versione collega TOTIME a Supabase/PostgreSQL.

## Novità principali

- Login utente con Supabase Auth.
- Clienti, progetti, attività, timesheet, compensi mensili e stati fattura salvati su Supabase.
- localStorage non è più lo storage principale dei dati.
- Import CSV direttamente nel database.
- Fatturazione organizzata come fattura mensile per cliente, con righe progetto/cliente finale copiabili singolarmente in Fiscozen.
- Tema dark / colori invertiti e font Apple system stack.

## Configurazione Supabase

La configurazione è già impostata nel file `app.js`:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`

Non inserire mai secret key o service role key nel frontend.

## Deploy

Carica il contenuto della cartella su GitHub e pubblica con Netlify/Vercel.

Se hai già installato una versione precedente come PWA, dopo il deploy fai refresh forzato o rimuovi/reinstalla l'app dalla Home per evitare cache vecchie.
