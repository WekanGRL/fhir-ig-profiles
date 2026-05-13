import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
export class AppComponent {
  selectedChambre: any = null;

  chambres = [
    { id: 1, numero: '101', type: 'Individuelle', etage: 1, disponible: true, equipements: ['TV', 'Wifi', 'Climatisation'] },
    { id: 2, numero: '102', type: 'Double', etage: 1, disponible: false, equipements: ['TV', 'Wifi'] },
    { id: 3, numero: '201', type: 'Soins intensifs', etage: 2, disponible: true, equipements: ['Moniteur cardiaque', 'Oxygène'] },
    { id: 4, numero: '205', type: 'Individuelle', etage: 2, disponible: true, equipements: ['TV', 'Balcon'] },
  ];

  selectChambre(chambre: any) {
    this.selectedChambre = chambre;
  }
}
