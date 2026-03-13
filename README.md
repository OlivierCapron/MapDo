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


Installation de leaflet

npm install react-leaflet leaflet

##  Composants utilisés : 

Interface utilisateur

	- Carte
	- BarreRecherche
	- DetailsRestaurant

Recherche

	- ChampRecherche
	- Suggestion

Gestion de la carte

	- Geolocalisation
	- CentreurMap


Gestion de l’état global

	- AppContext
	- AppProvider




App
	- Composant racine de l’application.
	- Initialise l’application React, le store Redux et centralise l’état global partagé.

Carte
	- Affiche la carte Leaflet, les marqueurs des restaurants et gère le chargement des restaurants à partir de l’API Nominatim lorsque la ville sélectionnée change.

BarreRecherche
	- Barre de recherche affichée en overlay au-dessus de la carte.
	- Contient le titre et le composant ChampRecherche.

ChampRecherche
	- Champ de recherche permettant de saisir une ville, récupérer les suggestions et sélectionner une ville.
	- Utilise l’API Nominatim pour rechercher les villes.

Suggestion
	- Composant affichant une des suggestions de ville cliquable dans la liste des résultats.

DetailsRestaurant
	- Composant affichant le restaurant sélectionné (ou un message si aucun restaurant n’est sélectionné).
	- Les données sont recupérées du store Redux.

CentreurMap
	- Centre automatiquement la carte sur les restaurants trouvés en calculant les bounds.

Geolocalisation
	- centre la carte sur la position de l’utilisateur si autorisée.

AppContext
	- Contexte React utilisé pour partager certains états dans l’application.

AppProvider
	- Provider du contexte qui stocke la ville sélectionnée et le restaurant sélectionné


On autocomplete les villes avec    https://nominatim.openstreetmap.org/search?<params>

On utilise https://nominatim.openstreetmap.org/lookup?osm_ids=R146656,W50637691,N240109189 pour trouver la box d'une ville

##   Tests : 
npm install -D vitest
npm install -D @testing-library/react
npm install -D @testing-library/jest-dom
npm install -D jsdom
npm install @reduxjs/toolkit react-redux

Lancement des tests: npx vitest

## Packaging

npm run build

## Deploiement

Dezipper le livrable derriere un serveur HTTP type Apache.