# TOTIME Web App / PWA v0.8

Database Edition con Supabase/PostgreSQL.

## Novità v0.8

- Login separato dalla registrazione.
- Form di registrazione dedicato con Nome, Cognome, Azienda/Ragione sociale, P.IVA, Email e Password.
- Nuova tabella `user_profiles` per salvare i dati profilo collegati all'utente Supabase.
- Messaggi più chiari in fase di accesso/registrazione.
- Dopo la registrazione, l’app torna automaticamente alla pagina di login.
- L’utente deve poi accedere con le credenziali appena scelte.
- Service worker/cache aggiornati a v0.8.

## Prima di pubblicare

Prima di caricare questa versione su GitHub/Netlify, eseguire in Supabase lo script:

`supabase_migration_v0.7.1_user_profiles.sql`

Il progetto continua a usare Supabase come database principale.


## Aggiornamento v0.8

Questa versione allinea il Timesheet al nuovo data model Supabase con campi separati:

- `work_site` = Sede / modalità di lavoro, ad esempio Remoto, Casa, Ufficio, Sede cliente, Onsite cliente.
- `work_city` = Luogo/Città, ad esempio Verona, Milano, Canicattì.

L'import CSV legge le colonne `Sede` e `Luogo/Città` separatamente e le salva nel database.

Prima di usare la v0.8, eseguire su Supabase la migration che aggiunge `work_site` e `work_city` a `timesheet_entries`.
