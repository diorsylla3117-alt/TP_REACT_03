# TP React : Gestion d'un catalogue de livres

Application React (Vite) de gestion de catalogue de livres pour une bibliothèque universitaire.
## Fonctionnalités
- Affichage de la liste des livres sous forme de cartes
- Compteur en temps réel des livres disponibles
- Emprunt et retour d'un livre (bouton Emprunter / Rendre)
- Ajout d'un nouveau livre avec un formulaire (titre et auteur)

## Étapes de réalisation

### Étape 1 : Initialisation du projet
```bash
npm create vite@latest 03 
 on choisit React
 on choisit javascrip+react
 on choisit  es
cd 03
npm install
```
Nettoyage des fichiers inutiles, puis création du dossier `src/components`.

### Étape 2 : Composant BookCard
Création de `src/components/BookCard.jsx` avec 4 props :
- `titre`
- `auteur`
- `estDisponible` (booléen)
- `onClickEmprunt` (fonction)

Le composant affiche le titre et l'auteur dans une carte stylisée, le statut (🟢 Disponible / 🔴 Emprunté) de façon conditionnelle, et un bouton "Emprunter" ou "Rendre".

### Étape 3 : Affichage dynamique dans App.jsx
- Import de `useState` et de `BookCard`
- État `books` initialisé avec 4 livres (`id`, `titre`, `auteur`, `estDisponible`)
- Titre principal avec le nombre de livres disponibles
- Affichage des livres avec `.map()` et la prop `key`

### Étape 4 : Interactivité et formulaire
- Fonction `onClickEmprunt(bookId)` qui inverse `estDisponible` du livre cliqué
- Formulaire avec deux champs contrôlés (`titre` et `auteur`)
- À la soumission : `e.preventDefault()`, vérification des champs non vides, ajout du livre (disponible par défaut), puis vidage des champs

## Structure du projet
```
03/
├── src/
│   ├── components/
│   │   └── BookCard.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## Lancer le projet
```bash
cd 03
npm install
npm run dev
```
Puis ouvrir http://localhost:5173 dans le navigateur.

## Notions utilisées
- **Composant** : fonction qui retourne du JSX
- **Props** : paramètres envoyés du parent vers l'enfant
- **useState** : variable d'état qui rafraîchit l'affichage
- **.map() et key** : transformer un tableau en liste de composants