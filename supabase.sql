create extension if not exists "pgcrypto";
create table if not exists public.inquiries (id uuid primary key default gen_random_uuid(),created_at timestamptz not null default now(),name text not null,email text not null,company text,interest text not null,budget text,timeline text,message text not null,status text not null default 'new' check (status in ('new','contacted','qualified','closed')));
alter table public.inquiries enable row level security;
-- No public policies: access goes through protected server routes using the service-role key.
