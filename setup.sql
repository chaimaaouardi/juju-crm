-- Juju CRM — à exécuter UNE FOIS dans Supabase (Dashboard → SQL Editor → coller → Run).

-- 1) Données partagées (une ligne par collection : stock, journées, benchmark…)
create table if not exists kv (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by text
);
alter table kv enable row level security;

-- 2) Qui a le droit d'entrer (ajoute l'email d'Amine à la 2e ligne)
create table if not exists allowed_users ( email text primary key );
insert into allowed_users(email) values
  ('chaimaa9ouardi@gmail.com')
  -- ,('EMAIL_AMINE_ICI')
on conflict do nothing;
alter table allowed_users enable row level security;
create policy "read allowed_users" on allowed_users for select to authenticated using (true);

-- 3) Règles : seuls les emails de la liste lisent/écrivent
create policy "kv select" on kv for select to authenticated
  using (exists (select 1 from allowed_users a where a.email = (auth.jwt()->>'email')));
create policy "kv insert" on kv for insert to authenticated
  with check (exists (select 1 from allowed_users a where a.email = (auth.jwt()->>'email')));
create policy "kv update" on kv for update to authenticated
  using (exists (select 1 from allowed_users a where a.email = (auth.jwt()->>'email')))
  with check (exists (select 1 from allowed_users a where a.email = (auth.jwt()->>'email')));

-- 4) Synchro temps réel entre vos téléphones
alter publication supabase_realtime add table kv;
