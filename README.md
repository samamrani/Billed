# BilledApp-Projet9

## Description

Le projet Billed est une application de gestion des notes de frais. Les employés peuvent soumettre leurs notes de frais et les administrateurs peuvent les valider. Cette application est composée d'un frontend et d'un backend.

## Fonctionnalités

- Soumission des notes de frais par les employés
- Validation des notes de frais par les administrateurs
- Affichage des notes de frais
- Authentification des utilisateurs

## Technologies Utilisées

- Frontend : HTML, CSS, JavaScript
- Backend : Node.js
- Tests : Jest

## Installation

### Prérequis

- Node.js
- npm

### Étapes

1. Cloner les dépôts backend et frontend dans un dossier `billed-app` :

    $ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Back.git
    $ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Front.git
    

2. Installer les dépendances et démarrer les serveurs :
    
    # Pour le backend
    $ cd Billed-app-FR-Back
    $ npm install
    $ npm run run:dev

    # Pour le frontend
    $ cd ../Billed-app-FR-Front
    $ npm install
    $ live-server
    

3. Accéder à l'application :
    - Backend : `http://localhost:3000`
    - Frontend : `http://127.0.0.1:8080/`

### Correction du Bug 

    affichage des Notes de Frais par Ordre Décroissant
    administrateur remplit correctement les champs du Login, il devrait naviguer sur la page 
    empêcher la saisie d'un document qui a une extension différente de jpg, jpeg ou png
    pourvoir déplier plusieurs listes, et consulter les tickets de chacune des deux listes

### Tests unitaires et d'intégration

#### [Test E2E] - Parcours Employé
