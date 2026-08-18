# Juju CRM

CRM de stand de marché pour Chaimaa & Amine. Hébergé sur GitHub Pages, données partagées via Supabase.

**URL :** https://chaimaaouardi.github.io/juju-crm/

## Mise en route (une seule fois)

1. Créer un projet sur [supabase.com](https://supabase.com) (gratuit) → nom `juju-crm`.
2. Dashboard → **SQL Editor** → coller le contenu de `setup.sql` (ajouter l'email d'Amine ligne 15) → **Run**.
3. Dashboard → **Project Settings → API** : copier `Project URL` et `anon public key` dans `config.js`, commit + push.
4. Chacun ouvre l'URL, crée son compte (email + mot de passe) avec un email de la liste autorisée.

## Radar automatique

`radar-data.js` est réécrit chaque lundi matin par l'agent de veille (tendances FR / TikTok / gros), commit + push → le site se met à jour tout seul.

Sans Supabase configuré, l'app fonctionne en mode local (données dans le navigateur, non partagées).
