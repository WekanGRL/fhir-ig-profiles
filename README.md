# ServicePatrimoine

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Cahier des charges

L'application doit renvoyer des practiciens en fonction des différentes chambres et batiments présents dans l'application

Il est possible de filtrer par batiment, par étage, par bloc opératoire, par box de soin, par chambre, de n'afficher que les laboratoires, les salles de consultations et les salles d'examen.

L'application doit également permettre d'ajouter des types de location ou de modifier des locations.

L'application permettra aussi de modifier le statut d'une location en fonction de son cas (disponible, indisponible, en travaux, en décontamination...)

L'application donnera des informations supplémentaires sur les locations notamment quels types de test sont nécessaires pour le controle de l'environnement.
Les locations peuvent également être filtrées par type de tests environnementaux.

L'application affichera également une arborescence des différentes locations présentes dans l'application(hoptial, batiment, étage, chambre ...)

Test push lea
