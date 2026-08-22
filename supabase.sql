create extension if not exists "pgcrypto";
create table if not exists public.inquiries (id uuid primary key default gen_random_uuid(),created_at timestamptz not null default now(),name text not null,email text not null,company text,interest text not null,budget text,timeline text,message text not null,status text not null default 'new' check (status in ('new','contacted','qualified','closed')));
alter table public.inquiries enable row level security;
-- No public policies: access goes through protected server routes using the service-role key.

create table if not exists public.backoffice_items (
  id uuid primary key default gen_random_uuid(),
  module text not null check (module in ('solutions','academy','resources','work')),
  slug text not null,
  title text not null,
  status text not null default 'published' check (status in ('draft','published','archived')),
  updated_at timestamptz not null default now(),
  unique(module,slug)
);
create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),created_at timestamptz not null default now(),
  learner_name text not null,email text not null,program text not null,package text,
  status text not null default 'pending' check (status in ('pending','active','completed','cancelled'))
);
create table if not exists public.resource_orders (
  id uuid primary key default gen_random_uuid(),created_at timestamptz not null default now(),
  customer_name text not null,email text not null,resource text not null,amount numeric,
  status text not null default 'pending' check (status in ('pending','paid','fulfilled','refunded'))
);
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),created_at timestamptz not null default now(),
  certificate_id text not null unique,learner_name text not null,program text not null,
  completion_date date not null,status text not null default 'valid' check (status in ('valid','revoked'))
);
alter table public.backoffice_items enable row level security;
alter table public.enrollments enable row level security;
alter table public.resource_orders enable row level security;
alter table public.certificates enable row level security;

insert into public.backoffice_items(module,slug,title) values
('solutions','website-development','Website Development'),('solutions','e-commerce-solutions','E-Commerce Solutions'),('solutions','business-automation','Business Automation'),('solutions','ai-business-systems','AI Business Systems'),('solutions','lead-generation','Lead Generation'),('solutions','crm-client-management','CRM & Client Management'),('solutions','social-media-systems','Social Media Systems'),('solutions','email-marketing-automation','Email Marketing & Automation'),('solutions','digital-transformation','Digital Transformation'),
('academy','business-automation','Business Automation Specialist'),('academy','e-commerce','E-Commerce Specialist'),('academy','website-development','Website Development Specialist'),('academy','ai-for-business','AI for Business Specialist'),('academy','lead-generation','Lead Generation Specialist'),('academy','social-media-systems','Social Media Systems Specialist'),('academy','email-marketing-automation','Email Marketing & Automation Specialist'),('academy','crm-client-management','CRM & Client Management Specialist'),('academy','digital-business-operations','Digital Business Operations Specialist'),('academy','digital-solutions','Digital Solutions Specialist'),
('resources','business-automation-playbook','Business Automation Playbook'),('resources','e-commerce-playbook','E-Commerce Playbook'),('resources','website-development-playbook','Website Development Playbook'),('resources','ai-for-business-playbook','AI for Business Playbook'),('resources','lead-generation-playbook','Lead Generation Playbook'),('resources','social-media-systems-playbook','Social Media Systems Playbook'),('resources','email-automation-playbook','Email Automation Playbook'),('resources','crm-playbook','CRM Playbook'),('resources','digital-operations-playbook','Digital Operations Playbook'),('resources','template-library','Template Library'),('resources','sop-collection','SOP Collection'),('resources','ai-prompt-pack','AI Prompt Pack'),('resources','growth-checklists','Growth Checklists'),('resources','client-toolkit','Client Toolkit'),
('work','lumera-skin','Luméra Skin'),('work','northline-home-services','Northline Home Services'),('work','verdant-cafe','Verdant Café'),('work','vantage-property-group','Vantage Property Group'),('work','forma-studio','Forma Studio'),('work','arden-and-co','Arden & Co.')
on conflict(module,slug) do nothing;
