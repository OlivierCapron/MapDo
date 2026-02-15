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

Déploiement  sur : - Vercel

------------------------------------------------------------------------
------------------------------------------------------------------------

## Creation du projet 

npm create vite@latest
npm install
npm run dev

