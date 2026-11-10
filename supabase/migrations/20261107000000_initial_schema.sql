-- VEIL's initial pseudonymous profile and post model.
-- These tables are private to authenticated sessions through RLS; do not add public grants.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  handle text not null unique
    check (handle ~ '^[a-z0-9_]{3,24}$'),
  display_name text not null default 'Quiet voice'
    check (char_length(display_name) between 1 and 48),
  bio text
    check (bio is null or char_length(bio) <= 240),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles (id) on delete cascade,
  body text not null
    check (char_length(btrim(body)) between 1 and 2000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_created_at_idx on public.posts (created_at desc);
create index if not exists posts_author_created_at_idx on public.posts (author_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.posts enable row level security;

revoke all on table public.profiles, public.posts from anon, public, authenticated;
grant select on table public.profiles, public.posts to authenticated;
grant update (handle, display_name, bio) on table public.profiles to authenticated;
grant insert (author_id, body) on table public.posts to authenticated;
grant update (body) on table public.posts to authenticated;
grant delete on table public.posts to authenticated;

create policy "Signed-in members can view profiles"
  on public.profiles for select to authenticated
  using (true);

create policy "Members can update their own profile"
  on public.profiles for update to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

create policy "Signed-in members can view posts"
  on public.posts for select to authenticated
  using (true);

create policy "Members can create posts as themselves"
  on public.posts for insert to authenticated
  with check (author_id = (select auth.uid()));

create policy "Members can edit their own posts"
  on public.posts for update to authenticated
  using (author_id = (select auth.uid()))
  with check (author_id = (select auth.uid()));

create policy "Members can delete their own posts"
  on public.posts for delete to authenticated
  using (author_id = (select auth.uid()));

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger posts_set_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

create or replace function public.create_veil_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, handle)
  values (
    new.id,
    'veil_' || substr(replace(new.id::text, '-', ''), 1, 12)
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

revoke all on function public.create_veil_profile() from public, anon, authenticated;

create trigger on_auth_user_created_create_veil_profile
  after insert on auth.users
  for each row execute function public.create_veil_profile();
