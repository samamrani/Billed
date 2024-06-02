# Projet 9 : Débuggez et testez un SaaS RH

## Présentation

Ce projet fait partie du cursus "Développeur d'application - JavaScript React" chez Openclassrooms. Il comprend le code complet du site web, incluant le backend et le frontend.

## Architecture du projet

Ce projet frontend est connecté à un service API backend que vous devez également lancer en local. Le projet backend se trouve à cette adresse : Backend du projet.
Technologies Utilisées

    Frontend : HTML, CSS, JavaScript
    Backend : Node.js
    Tests : Jest

### Installation

Prérequis

    Node.js
    npm

Étapes

    Cloner les dépôts backend et frontend dans un dossier billed-app :

$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Back.git
$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Front.git

Installer les dépendances et démarrer les serveurs :

        Pour le backend
    $ cd Billed-app-FR-Back
    $ npm install
    $ npm run run:dev

        Pour le frontend
    $ cd ../Billed-app-FR-Front
    $ npm install
    $ live-server

    Accéder à l'application :
    
        Frontend : http://127.0.0.1:8080

### Correction du Bug

    Affichage des notes de frais par ordre décroissant.
    Navigation vers la page appropriée lorsque l'administrateur remplit correctement les champs du login.
    Empêcher la saisie d'un document avec une extension différente de jpg, jpeg ou png.
    Pouvoir déplier plusieurs listes et consulter les tickets de chacune des deux listes.

### Tests unitaires et d'intégration
[Test E2E] - Parcours Employé