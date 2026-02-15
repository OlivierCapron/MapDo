#  Projet MapDo

Etape du developpement: 


##  Objectifs

Une application React permettant de :

-   Rechercher une ville
-   Afficher une carte interactive
-   Localiser les restaurants McDonald's
-   Sélectionner un restaurant et afficher ses informations



------------------------------------------------------------------------

## Technologies 

-   React.js
-   React Leaflet
-   Nominatim
	- Recherche de villes + suggestions
	- Recherche de restaurants
-   React Testing Library



------------------------------------------------------------------------

## Parcours utilisateur

1.  L'utilisateur arrive sur une carte vide centree sur sa position (via leur IP)
2.  Il cherche une ville
3.  Des suggestions s'affichent
4.  Il sélectionne une ville
5.  La carte est centrée sur la ville
6.  Les restaurants apparaissent sous forme de marqueurs
7.  Un clic sur un marqueur affiche une popup
8.  Le bouton "Sélectionner" met à jour l'overlay

------------------------------------------------------------------------

## Installation

npm install 
npm run dev


------------------------------------------------------------------------

## Build production

npm run build

Déploiement  sur  Vercel

------------------------------------------------------------------------
------------------------------------------------------------------------

## Creation du projet 

1. npm create vite@latest
2. npm install
3. npm run dev

Initialisation de Git

1. git init
2. git add .
3. git commit -m "Initial commit"

Association avec GitHub

1. git remote add origin https://github.com/OlivierCapron/MapDo
2. git branch -M main
3. git push -u origin main




##  Composants utilisés : 

	- App : Composant de base qui centralise l'etat global de l'application
	- Carte : affiche la carte, les marqueurs et gere le centrage suivant la position de l'utilisateur
	- ChampRecherche : input de texte + Bouton de validation + Affichage des marqueurs
	- ListeSuggestions : Affichage des suggestions + clic sur ville suggerée
	- Marqueur : gere la popup avec les details du restaurant
	- DetailsRestaurant : Contient les infos "Aucun restaurant selectionn" ou les details du restaurant